let firebaseConfig = {
    apiKey: "AIzaSyAJ3hx7LH2DjaZ9XRswkK0W6QOKg4K6N4s",
    authDomain: "blogging-website-b02a6.firebaseapp.com",
    projectId: "blogging-website-b02a6",
    storageBucket: "blogging-website-b02a6.appspot.com",
    messagingSenderId: "184021606767",
    appId: "1:184021606767:web:afe5abeb2df81f99bc889a"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

// Logout
const logoutUser = () => {
    auth.signOut();
    location.reload();
};
