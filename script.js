// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFqGg8e6n2LnvC-f_BqjUHYcacAxoAOSg",
    authDomain: "fir-test-edd97.firebaseapp.com",
    databaseURL: "https://fir-test-edd97.firebaseio.com",
    projectId: "fir-test-edd97",
    storageBucket: "fir-test-edd97.appspot.com",
    messagingSenderId: "922299671240",
    appId: "1:922299671240:web:ca7e63705f8a8d177f7bfd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const register = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(()=> alert("success"))
    .catch(function (error) {
        alert(error);
    });
}

const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=> alert("success!"))
    .catch(function (error) {
        alert(error);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#registration-form').addEventListener('submit', event => {
        event.preventDefault()
        const email = document.querySelector('#registration-form input[type="email"]').value
        const password = document.querySelector('#registration-form input[type="password"]').value
        register(email, password)
    })

    document.querySelector('#login-form').addEventListener('submit', event => {
        event.preventDefault()
        const email = document.querySelector('#login-form input[type="email"]').value
        const password = document.querySelector('#login-form input[type="password"]').value
        login(email, password)
    })
})


const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
