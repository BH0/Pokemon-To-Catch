import firebase from 'firebase';
let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
let fire0 = firebase.initializeApp(config);
let fire = {
    pokemonRef: fire0.database().ref('pokemon'),
    fireAuth: firebase.auth()
}

/* firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log("User is authenticated");
    } else {
        console.log("User is NOT authenticated");
    }
});
*/

export default fire;
