// ── État de l'app ──
const STATE = {
  lang: localStorage.getItem('qa-lang') || 'fr',
  currentParcours: null,
  currentEtape: 0,
  activeTab: 'home',
  digits: {},
  photos: {},
  stars: 4,
  progress: JSON.parse(localStorage.getItem('qa-progress') || '{}'),
  installPrompt: null
};

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/quebec-aventures/sw.js').catch(console.warn);
  }
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    STATE.installPrompt = e;
    document.getElementById('install-banner')?.classList.remove('hidden');
  });
  applyLang();
  renderHome();
  setupNav();
});

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

// ── Navigation ──
function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  STATE.activeTab = tab;
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`screen-${tab}`)?.classList.remove('hidden');
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');
  if (tab === 'home') renderHome();
  if (tab === 'trails') renderTrails();
  if (tab === 'account') renderAccount();
}

// ── Accueil ──
function renderHome() {
  const lang = getLang();
  const container = document.getElementById('home-parcours');
  if (!container) return;
  container.innerHTML = DATA.parcours.map(p => {
    const done = STATE.progress[p.id]?.done;
    const inProg = STATE.progress[p.id] && !done;
    return `<div class="proche-card" onclick="openParcours('${p.id}')">
      <div class="proche-icon" style="background:${p.color}22">${p.emoji}</div>
      <div class="proche-body">
        <div class="proche-name">${p.name[lang]}</div>
        <div class="proche-sub">${p[p.mode === 'walking' ? 'etapes' : 'etapes'].length} ${t(p.mode === 'walking' ? 'stops' : 'steps')} · ${p.distance} · ${p.duration[lang]}</div>
        <div class="proche-tags">
          ${done ? `<span class="tag tag-done">${t('doneBadge')}</span>` : inProg ? `<span class="tag tag-prog">${t('inProgress')}</span>` : `<span class="tag tag-new">${t('newBadge')}</span>`}
          <span class="tag tag-mode">${p.mode === 'walking' ? '🚶 ' + t('walking') : p.mode === 'cycling' ? t('cycling') : '🚗 ' + t('mixed')}</span>
        </div>
      </div>
    </div>`;
  }).join('');
  // Stats bannière
  const totalDone = Object.values(STATE.progress).filter(p => p.done).length;
  const totalKm = DATA.parcours.filter(p => STATE.progress[p.id]?.done).reduce((s, p) => s + parseFloat(p.distance), 0);
  document.getElementById('stat-trails').textContent = totalDone;
  document.getElementById('stat-km').textContent = totalKm.toFixed(1);
  document.getElementById('stat-badges').textContent = Object.values(STATE.progress).reduce((s, p) => s + (p.done ? 1 : 0), 0);
  // GPS animation
  startGPS();
}

// ── Liste des parcours ──
function renderTrails() {
  const lang = getLang();
  const container = document.getElementById('trails-list');
  if (!container) return;
  container.innerHTML = DATA.parcours.map(p => {
    const done = STATE.progress[p.id]?.done;
    const inProg = STATE.progress[p.id] && !done;
    return `<div class="parcours-card" onclick="openParcours('${p.id}')">
      <div class="parcours-hero" style="background:${p.color}">
        <span class="parcours-emoji">${p.emoji}</span>
        <div class="parcours-title">${p.name[lang]}</div>
        <div class="parcours-sub">${p.subtitle[lang]}</div>
        ${done ? `<span class="status-pill pill-done">${t('doneBadge')}</span>` : inProg ? `<span class="status-pill pill-prog">${t('inProgress')}</span>` : `<span class="status-pill pill-new">${t('newBadge')}</span>`}
        <div class="parcours-chips">
          <span class="chip">${p.mode === 'walking' ? '🚶 ' + t('walking') : p.mode === 'cycling' ? t('cycling') : '🚗 ' + t('mixed')}</span>
          <span class="chip">${p.etapes.length} ${t('steps')}</span>
          <span class="chip">${p.distance}</span>
          <span class="chip">${p.duration[lang]}</span>
          <span class="chip">${t('free')}</span>
        </div>
      </div>
      <div class="parcours-body">
        <div class="parcours-stats">
          <div class="pstat"><div class="pstat-v">${p.enigmaCount}</div><div class="pstat-l">${t('enigmas')}</div></div>
          <div class="pstat"><div class="pstat-v">${p.distance}</div><div class="pstat-l">${t('km')}</div></div>
          <div class="pstat"><div class="pstat-v">${p.badgeCount}</div><div class="pstat-l">${t('badges')}</div></div>
        </div>
        <button class="p-btn ${done ? 'btn-replay' : 'btn-start'}" onclick="event.stopPropagation();openParcours('${p.id}')">
          ${done ? t('replay') : inProg ? t('resume') : t('start')}
        </button>
      </div>
    </div>`;
  }).join('');
}

// ── Ouvrir un parcours ──
function openParcours(id) {
  STATE.currentParcours = DATA.parcours.find(p => p.id === id);
  STATE.currentEtape = STATE.progress[id]?.lastEtape || 0;
  STATE.digits = STATE.progress[id]?.digits || {};
  renderParcoursDetail();
}

function renderParcoursDetail() {
  const p = STATE.currentParcours;
  const lang = getLang();
  const etape = p.etapes[STATE.currentEtape];
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const screen = document.getElementById('screen-etape');
  screen.classList.remove('hidden');
  screen.innerHTML = buildEtapeHTML(p, etape, lang);
  attachEtapeEvents(p, etape);
}

function buildEtapeHTML(p, etape, lang) {
  const adresse = typeof etape.adresse === 'object' ? etape.adresse[lang] : etape.adresse;
  const enigmesHTML = etape.enigmes.map(e => `
    <div class="enigme-card">
      <div class="enigme-hdr" style="background:${p.color}">
        ${t('enigma')} ${e.num} — ${t('letter')} ${e.lettre}
      </div>
      <div class="enigme-body">
        <div class="enigme-q">${e.question[lang]}</div>
        <div class="indice-box">💡 ${e.indice[lang]}</div>
        <div class="ans-row">
          <input type="number" id="ans-${e.lettre}" class="ans-input" placeholder="?" min="0" max="99" value="${STATE.digits[e.lettre] !== undefined ? STATE.digits[e.lettre] : ''}">
          <button class="val-btn" style="background:${p.color}" onclick="valider('${e.lettre}',${e.reponse})">
            ${t('validate')}
          </button>
        </div>
        <div id="msg-${e.lettre}" class="ans-msg"></div>
      </div>
    </div>
  `).join('');

  const tr = etape.transition;
  const trDest = typeof tr.dest === 'object' ? tr.dest[lang] : tr.dest;
  const trNote = tr.note[lang];
  const trIco = tr.mode === 'fin' ? '🏁' : tr.mode === 'voiture' ? '🚗' : '🚶';
  const trLbl = tr.mode === 'fin' ? t('trailDone') : tr.mode === 'voiture' ? t('nextStopCar') : t('nextStop');
  const trColor = tr.mode === 'fin' ? '#3949AB' : tr.mode === 'voiture' ? '#854F0B' : '#2E7D32';
  const trBg = tr.mode === 'fin' ? '#E8EAF6' : tr.mode === 'voiture' ? '#FEF3E2' : '#E8F5E9';
  const trBg2 = tr.mode === 'fin' ? '#C5CAE9' : tr.mode === 'voiture' ? '#FAEEDA' : '#C8E6C9';

  const gpsBtn = tr.mode === 'fin' ? '' : tr.mode === 'voiture'
    ? `<button class="gps-btn" style="background:#E9A208;color:#412402" onclick="openGPS(${etape.coords?.lat || 46.05},${etape.coords?.lng || -71.96})">${t('navigateCar')}</button>`
    : `<button class="gps-btn" style="background:${p.color};color:white" onclick="openGPS(${etape.coords?.lat || 46.05},${etape.coords?.lng || -71.96})">${t('navigateWalk')}</button>`;

  const nextBtn = tr.mode === 'fin'
    ? `<button class="next-btn" style="background:${p.color}" onclick="finirParcours()">${t('trailDone')} 🏆</button>`
    : `<button class="next-btn" style="background:${p.color}" onclick="etapeSuivante()">${tr.mode === 'voiture' ? '🚗' : '🚶'} ${trDest}</button>`;

  return `
    <div class="etape-header" style="background:${p.color}">
      <button class="back-btn" onclick="retourListe()">← ${t('trails')}</button>
      <div class="etape-num">${t('steps').charAt(0).toUpperCase() + t('steps').slice(1)} ${STATE.currentEtape + 1} / ${p.etapes.length}</div>
      <div class="etape-title">${typeof etape.nom === 'object' ? etape.nom[lang] : etape.nom}</div>
      <div class="etape-addr">📍 ${adresse}</div>
      <div class="etape-progress">
        <div class="etape-progress-bar" style="width:${((STATE.currentEtape + 1) / p.etapes.length) * 100}%"></div>
      </div>
    </div>
    <div class="etape-body">
      <div class="duree-badge" style="background:${p.color}22;border:1px solid ${p.color}44">
        ⏱ ${etape.duree} ${t('approxTime')}
      </div>
      <div class="info-card">
        <div class="info-badge">${t('history')}</div>
        <div class="info-text">${etape.histoire[lang]}</div>
      </div>
      <div class="mission-card" style="background:${p.color}15;border:1px solid ${p.color}30">
        <div class="mission-title" style="color:${p.colorDark}">🕵️ ${t('mission')}</div>
        <div class="mission-text" style="color:${p.colorDark}">${etape.mission[lang]}</div>
      </div>
      <div class="infos-pratiques">
        <div class="info-title">${t('practicalInfo')}</div>
        <div class="info-row"><span class="info-ico">🚻</span><span>${etape.infos.toilettes[lang]}</span></div>
        ${etape.infos.borne[lang] !== '—' ? `<div class="info-row"><span class="info-ico">⚡</span><span>${etape.infos.borne[lang]}</span></div>` : ''}
        ${etape.infos.parking[lang] !== '—' ? `<div class="info-row"><span class="info-ico">🅿</span><span>${etape.infos.parking[lang]}</span></div>` : ''}
      </div>
      ${enigmesHTML}
      ${etape.bonus ? `<div class="bonus-card"><div class="bonus-title">⭐ ${t('didYouKnow')}</div><div class="bonus-text">${etape.bonus[lang]}</div></div>` : ''}
      <div class="transition-card" style="background:${trBg}">
        <div class="tr-top" style="color:${trColor}">${trIco} ${trLbl}</div>
        <div class="tr-dest" style="color:${trColor}">${trDest}</div>
        ${tr.dist ? `<div class="tr-dist" style="color:${trColor}">${tr.dist}</div>` : ''}
        <div class="tr-note" style="background:${trBg2};color:${trColor}">${trNote}</div>
        ${gpsBtn}
        ${nextBtn}
      </div>
    </div>
  `;
}

function attachEtapeEvents() {
  // Validation dynamique
}

function valider(lettre, bonne) {
  const input = document.getElementById(`ans-${lettre}`);
  const msg = document.getElementById(`msg-${lettre}`);
  const val = parseInt(input?.value);
  if (isNaN(val)) return;
  if (val === bonne || bonne === 0) {
    STATE.digits[lettre] = val;
    saveProgress();
    if (msg) { msg.textContent = t('correct') + ` — ${t('digit')} ${lettre} = ${val}`; msg.className = 'ans-msg ans-ok'; }
    input?.classList.add('ans-validated');
  } else {
    if (msg) { msg.textContent = t('wrong'); msg.className = 'ans-msg ans-err'; }
  }
}

function etapeSuivante() {
  const p = STATE.currentParcours;
  if (STATE.currentEtape < p.etapes.length - 1) {
    STATE.currentEtape++;
    saveProgress();
    renderParcoursDetail();
    document.getElementById('screen-etape')?.scrollTo(0, 0);
  }
}

function retourListe() {
  saveProgress();
  switchTab('trails');
}

function finirParcours() {
  const p = STATE.currentParcours;
  STATE.progress[p.id] = { done: true, digits: STATE.digits, lastEtape: p.etapes.length - 1 };
  saveProgress();
  renderFin(p);
}

function renderFin(p) {
  const lang = getLang();
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const screen = document.getElementById('screen-fin');
  screen.classList.remove('hidden');
  document.getElementById('fin-emoji').textContent = p.emoji;
  document.getElementById('fin-badge-name').textContent = p.badge.name[lang];
  document.getElementById('fin-trail-name').textContent = p.name[lang];
  document.getElementById('fin-enigmas').textContent = p.enigmaCount;
  document.getElementById('fin-km').textContent = p.distance;
  // Grille de coordonnées
  renderGrille(p);
  switchFinTab('rewards');
}

function renderGrille(p) {
  const lang = getLang();
  const etapes = p.etapes;
  const allLettres = etapes.flatMap(e => e.enigmes.map(en => en.lettre));
  const grid = document.getElementById('coords-grid');
  if (!grid) return;
  grid.innerHTML = allLettres.map(l => `
    <div class="coord-cell ${STATE.digits[l] !== undefined ? 'coord-found' : ''}">
      <div class="coord-letter" style="color:${p.color}">${l}</div>
      <div class="coord-value">${STATE.digits[l] !== undefined ? STATE.digits[l] : '?'}</div>
    </div>
  `).join('');
}

function switchFinTab(tab) {
  document.getElementById('fin-rewards').classList.toggle('hidden', tab !== 'rewards');
  document.getElementById('fin-comments').classList.toggle('hidden', tab !== 'comments');
  document.getElementById('tab-rewards').classList.toggle('tab-active', tab === 'rewards');
  document.getElementById('tab-comments').classList.toggle('tab-active', tab === 'comments');
}

// ── Compte ──
function renderAccount() {
  const totalDone = Object.values(STATE.progress).filter(p => p.done).length;
  const totalKm = DATA.parcours.filter(p => STATE.progress[p.id]?.done).reduce((s, p) => s + parseFloat(p.distance), 0);
  document.getElementById('acc-trails').textContent = totalDone;
  document.getElementById('acc-km').textContent = totalKm.toFixed(1);
  document.getElementById('acc-enigmas').textContent = Object.values(STATE.digits || {}).length;
  document.getElementById('acc-badges').textContent = totalDone;
}

// ── GPS ──
function startGPS() {
  let gX = 44, gY = 50, dX = 0.06, dY = 0.05;
  setInterval(() => {
    gX += dX; gY += dY;
    if (gX > 48 || gX < 40) dX = -dX;
    if (gY > 54 || gY < 46) dY = -dY;
    ['gps-dot', 'gps-ring'].forEach(id => {
      const d = document.getElementById(id);
      if (d) { d.style.left = gX + '%'; d.style.top = gY + '%'; }
    });
  }, 1000);
}

function openGPS(lat, lng) {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`, '_blank');
}

// ── Langue ──
function changeLang(lang) {
  localStorage.setItem('qa-lang', lang);
  location.reload();
}

// ── Photos & Commentaires ──
let photosAdded = { 1: false, 2: false, 3: false };
function togglePhoto(n) {
  photosAdded[n] = !photosAdded[n];
  const slot = document.getElementById(`photo-slot-${n}`);
  if (!slot) return;
  if (photosAdded[n]) {
    slot.classList.add('slot-filled');
    slot.innerHTML = `<div style="font-size:26px">🌲</div><div style="font-size:9px;color:#1A6B3A;font-weight:700;margin-top:4px">${t('photoSlot')} ${n} ✓</div>`;
  } else {
    slot.classList.remove('slot-filled');
    slot.innerHTML = `<div style="font-size:20px;color:#CCC">📷</div><div style="font-size:9px;color:#CCC;margin-top:3px">${t('photoSlot')} ${n}</div>`;
  }
}

function setStars(n) {
  STATE.stars = n;
  for (let i = 1; i <= 5; i++) {
    const s = document.getElementById(`star-${i}`);
    if (s) s.classList.toggle('star-on', i <= n);
  }
}

function publierComment() {
  const txt = document.getElementById('comment-text')?.value;
  if (!txt?.trim()) { alert(t('noAnswer')); return; }
  alert(t('commentPublished'));
  if (document.getElementById('comment-text')) document.getElementById('comment-text').value = '';
  [1, 2, 3].forEach(n => { if (photosAdded[n]) togglePhoto(n); });
  photosAdded = { 1: false, 2: false, 3: false };
}

function toggleLike(btn) {
  btn.classList.toggle('liked');
  const n = parseInt(btn.textContent.match(/\d+/)[0]);
  const liked = btn.classList.contains('liked');
  btn.textContent = (liked ? '❤️ ' : '🤍 ') + (liked ? n + 1 : n - 1) + ' ' + t('liked');
}

// ── Install PWA ──
function installApp() {
  if (STATE.installPrompt) {
    STATE.installPrompt.prompt();
    STATE.installPrompt.userChoice.then(() => {
      STATE.installPrompt = null;
      document.getElementById('install-banner')?.classList.add('hidden');
    });
  }
}

// ── Persistence ──
function saveProgress() {
  const p = STATE.currentParcours;
  if (!p) return;
  STATE.progress[p.id] = STATE.progress[p.id] || {};
  STATE.progress[p.id].lastEtape = STATE.currentEtape;
  STATE.progress[p.id].digits = { ...STATE.digits };
  localStorage.setItem('qa-progress', JSON.stringify(STATE.progress));
}

function resetProgress() {
  if (confirm('Réinitialiser toute la progression ?')) {
    localStorage.removeItem('qa-progress');
    localStorage.removeItem('qa-digits');
    STATE.progress = {};
    STATE.digits = {};
    renderAccount();
  }
}

// ── Bug fixes ──

// 1. Bloquer validation si reponse = 0 (à confirmer sur place)
const _origValider = window.valider;
window.valider = function(lettre, bonne) {
  if (bonne === 0) {
    const msg = document.getElementById(`msg-${lettre}`);
    const input = document.getElementById(`ans-${lettre}`);
    if (msg) { msg.textContent = '📍 À valider sur place — note ta réponse !'; msg.className = 'ans-msg ans-pending'; }
    if (input) { STATE.digits[lettre] = parseInt(input.value) || 0; saveProgress(); }
    return;
  }
  if (typeof _origValider === 'function') _origValider(lettre, bonne);
};

// 2. Bouton retour après fin de parcours + option recommencer
const _origFinirParcours = window.finirParcours;
window.finirParcours = function() {
  const p = STATE.currentParcours;
  STATE.progress[p.id] = { done: true, digits: STATE.digits, lastEtape: p.etapes.length - 1 };
  saveProgress();
  renderFin(p);
};

// Surcharger renderFin pour ajouter bouton retour + recommencer
const _origRenderFin = window.renderFin;
window.renderFin = function(p) {
  _origRenderFin(p);
  // Ajouter boutons retour et recommencer dans la section récompenses
  const recompBody = document.querySelector('#fin-rewards .recomp-body');
  if (recompBody) {
    const btnWrap = document.createElement('div');
    btnWrap.style.cssText = 'display:flex;gap:10px;margin-bottom:16px';
    btnWrap.innerHTML = `
      <button onclick="switchTab('trails')" style="flex:1;padding:13px;border:2px solid #0D5C2E;border-radius:14px;background:white;color:#0D5C2E;font-size:14px;font-weight:800;cursor:pointer;font-family:Outfit,sans-serif">
        ← Retour aux parcours
      </button>
      <button onclick="recommencerParcours('${p.id}')" style="flex:1;padding:13px;border:none;border-radius:14px;background:#F1EFE8;color:#888;font-size:14px;font-weight:800;cursor:pointer;font-family:Outfit,sans-serif">
        🔄 Recommencer
      </button>
    `;
    recompBody.insertBefore(btnWrap, recompBody.firstChild);
  }
};

// 3. Recommencer depuis le début
window.recommencerParcours = function(id) {
  if (!confirm('Recommencer ce parcours depuis le début ?')) return;
  const p = DATA.parcours.find(p => p.id === id);
  STATE.progress[id] = {};
  STATE.digits = {};
  localStorage.setItem('qa-progress', JSON.stringify(STATE.progress));
  STATE.currentParcours = p;
  STATE.currentEtape = 0;
  renderParcoursDetail();
};

// 4. Partage FB/Insta avec vrai contenu
window.partagerFacebook = function(parcoursName) {
  const msg = encodeURIComponent(`🍁 Je viens de compléter "${parcoursName}" sur Québec Aventures ! #QuébecAventures #Victoriaville`);
  const url = encodeURIComponent('https://yannickdrieux-ux.github.io/quebec-aventures');
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${msg}`, '_blank');
};

window.partagerInstagram = function() {
  alert('📸 Sauvegarde d\'abord l\'image, puis partage-la sur Instagram avec #QuébecAventures !');
};

// Couleur pending
const style = document.createElement('style');
style.textContent = `.ans-pending { color: #92600A; }`;
document.head.appendChild(style);
