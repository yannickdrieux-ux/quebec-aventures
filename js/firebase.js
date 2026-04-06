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
    }
  } catch (e) {
    console.error('Load user data error:', e);
  }
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
  const accPhoto = document.getElementById('acc-photo');

  if (user) {
    // Avatar initiales ou photo
    if (avatar) {
      const initials = (user.displayName || 'A').split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
      avatar.textContent = user.photoURL ? '' : initials;
      if (user.photoURL) {
        avatar.style.backgroundImage = `url(${user.photoURL})`;
        avatar.style.backgroundSize = 'cover';
        avatar.textContent = '';
      }
    }
    if (accName) accName.textContent = user.displayName || 'Aventurier';
    if (accSince) {
      const date = user.metadata?.creationTime
        ? new Date(user.metadata.creationTime).toLocaleDateString('fr-CA', {month:'long', year:'numeric'})
        : '';
      accSince.textContent = `Membre depuis ${date} · Victoriaville`;
    }
    // Cacher bouton login, montrer logout
    document.getElementById('auth-modal')?.classList.add('hidden');
    document.getElementById('logout-row')?.classList.remove('hidden');
    document.getElementById('login-row')?.classList.add('hidden');
  } else {
    if (avatar) { avatar.textContent = '👤'; avatar.style.backgroundImage = ''; }
    if (accName) accName.textContent = 'Mon compte';
    document.getElementById('logout-row')?.classList.add('hidden');
    document.getElementById('login-row')?.classList.remove('hidden');
  }
  // Rafraîchir stats
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
