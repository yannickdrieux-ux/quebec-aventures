// ── Firebase SDK (CDN compat version) ──
// Chargé via index.html

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDYysRDtSYT72d5bEMrlJdHjtUM0OK1gJg",
  authDomain: "quebec-aventures.firebaseapp.com",
  projectId: "quebec-aventures",
  storageBucket: "quebec-aventures.firebasestorage.app",
  messagingSenderId: "643388363257",
  appId: "1:643388363257:web:499d6d7fddcaf782566d28"
};

// Init Firebase
firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db = firebase.firestore();

// ── Auth State ──
let currentUser = null;

auth.onAuthStateChanged(async (user) => {
  currentUser = user;
  if (user) {
    await loadUserData(user.uid);
    updateAuthUI(user);
  } else {
    updateAuthUI(null);
  }
});

// ── Login Google ──
async function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    // Créer profil si nouveau
    await ensureUserProfile(user);
    closeAuthModal();
  } catch (e) {
    console.error('Google login error:', e);
    alert('Erreur de connexion Google. Réessaie !');
  }
}

// ── Login Facebook ──
async function loginFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    await ensureUserProfile(result.user);
    closeAuthModal();
  } catch (e) {
    console.error('Facebook login error:', e);
    alert('Erreur de connexion Facebook. Réessaie !');
  }
}

// ── Logout ──
async function logout() {
  await auth.signOut();
  STATE.progress = {};
  STATE.digits = {};
  updateAuthUI(null);
  switchTab('home');
}

// ── Créer profil utilisateur ──
async function ensureUserProfile(user) {
  const ref = db.collection('users').doc(user.uid);
  const snap = await ref.get();
  if (!snap.exists) {
    await ref.set({
      displayName: user.displayName || 'Aventurier',
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      xp: 0,
      level: 1,
      progress: {},
      badges: [],
      citiesExplored: []
    });
  }
}

// ── Charger données utilisateur ──
async function loadUserData(uid) {
  try {
    const snap = await db.collection('users').doc(uid).get();
    if (snap.exists) {
      const data = snap.data();
      STATE.progress = data.progress || {};
      STATE.userXP = data.xp || 0;
      STATE.userLevel = data.level || 1;
      STATE.userBadges = data.badges || [];
      renderRealBadges(STATE.userBadges);
    }
  } catch (e) {
    console.error('Load user data error:', e);
  }
}

// ── Afficher les vrais badges ──
function renderRealBadges(earnedBadgeIds) {
  const row = document.getElementById('badges-row');
  if (!row) return;
  const allBadges = [
    { id: 'p1', emoji: '🏛', name: { fr: "L'Historien", en: "The Historian", es: "El Historiador" } },
    { id: 'p2', emoji: '🦢', name: { fr: "L'Ornithologue", en: "The Ornithologist", es: "El Ornitólogo" } },
    { id: 'p3', emoji: '🏙', name: { fr: "L'Urbaniste", en: "The Urbanist", es: "El Urbanista" } },
    { id: 'p4', emoji: '🍁', name: { fr: "Légende du Québec", en: "Quebec Legend", es: "Leyenda de Quebec" } },
  ];
  const lang = getLang();
  row.innerHTML = allBadges.map(b => {
    const earned = earnedBadgeIds.includes(b.id);
    return `<div class="badge-mini ${earned ? '' : 'lk'}">
      <div class="bm-ico">${b.emoji}</div>
      <div class="bm-name">${b.name[lang]}</div>
      ${earned ? `<div class="bm-status">Obtenu</div>` : ''}
    </div>`;
  }).join('');
}

// ── Sauvegarder progression ──
async function saveProgressFirebase() {
  if (!currentUser) return;
  const p = STATE.currentParcours;
  if (!p) return;
  try {
    await db.collection('users').doc(currentUser.uid).update({
      [`progress.${p.id}`]: STATE.progress[p.id] || {}
    });
  } catch (e) {
    console.error('Save progress error:', e);
  }
}

// ── Sauvegarder badge ──
async function saveBadgeFirebase(parcoursId) {
  if (!currentUser) return;
  try {
    await db.collection('users').doc(currentUser.uid).update({
      badges: firebase.firestore.FieldValue.arrayUnion(parcoursId),
      xp: firebase.firestore.FieldValue.increment(250),
    });
  } catch (e) {
    console.error('Save badge error:', e);
  }
}

// ── UI Auth ──
function updateAuthUI(user) {
  const avatar = document.getElementById('avatar-btn');
  const accName = document.getElementById('acc-name');
  const accSince = document.getElementById('acc-since');
  const accInitials = document.getElementById('acc-avatar-initials');
  const accLevel = document.getElementById('acc-level');
  const xpFill = document.getElementById('xp-fill-acc');
  const xpLbl = document.getElementById('xp-lbl-acc');

  if (user) {
    const initials = (user.displayName || 'A').split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
    // Avatar nav
    if (avatar) {
      if (user.photoURL) {
        avatar.style.backgroundImage = `url(${user.photoURL})`;
        avatar.style.backgroundSize = 'cover';
        avatar.textContent = '';
      } else {
        avatar.textContent = initials;
        avatar.style.backgroundImage = '';
      }
    }
    // Avatar compte
    if (accInitials) accInitials.textContent = initials;
    if (accName) accName.textContent = user.displayName || 'Aventurier';
    if (accSince) {
      const date = user.metadata?.creationTime
        ? new Date(user.metadata.creationTime).toLocaleDateString('fr-CA', {month:'long', year:'numeric'})
        : 'avril 2026';
      accSince.textContent = `Membre depuis ${date} · Victoriaville`;
    }
    // XP
    const xp = STATE.userXP || 0;
    const level = Math.floor(xp / 250) + 1;
    const xpInLevel = xp % 250;
    if (accLevel) accLevel.textContent = level;
    if (xpFill) xpFill.style.width = (xpInLevel / 250 * 100) + '%';
    if (xpLbl) xpLbl.textContent = `${xpInLevel} / 250 XP pour le niveau ${level + 1}`;
    // Afficher logout, cacher login
    document.getElementById('logout-row')?.classList.remove('hidden');
    document.getElementById('login-row')?.classList.add('hidden');
  } else {
    if (avatar) { avatar.textContent = '👤'; avatar.style.backgroundImage = ''; }
    if (accInitials) accInitials.textContent = '?';
    if (accName) accName.textContent = 'Mon compte';
    if (accSince) accSince.textContent = 'Connecte-toi pour sauvegarder ta progression';
    if (accLevel) accLevel.textContent = '1';
    if (xpFill) xpFill.style.width = '0%';
    if (xpLbl) xpLbl.textContent = '0 / 250 XP pour le niveau 2';
    document.getElementById('logout-row')?.classList.add('hidden');
    document.getElementById('login-row')?.classList.remove('hidden');
    // Remettre badges verrouillés
    renderRealBadges([]);
  }
  if (typeof renderAccount === 'function') renderAccount();
}

// ── Modal Auth ──
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('hidden');
}

// Surcharger saveProgress pour inclure Firebase
const _origSaveProgress = window.saveProgress;
window.saveProgress = function() {
  if (typeof _origSaveProgress === 'function') _origSaveProgress();
  saveProgressFirebase();
};

// Surcharger finirParcours pour sauvegarder le badge
const _origFinir = window.finirParcours;
window.finirParcours = function() {
  if (typeof _origFinir === 'function') _origFinir();
  if (STATE.currentParcours) saveBadgeFirebase(STATE.currentParcours.id);
};
