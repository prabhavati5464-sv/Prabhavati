  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } 
  from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAFCBIhQX3019vs3WP7roIzSCI3GQHcUHo",
    authDomain: "igeeks-ed71e.firebaseapp.com",
    projectId: "igeeks-ed71e",
    storageBucket:  "igeeks-ed71e.firebasestorage.app",
    messagingSenderId: "394663408855",
    appId:  "1:394663408855:web:0a10bab1a77b0d3139ac92",
    measurementId: "G-M91VD0WY0H"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // login success → redirect
        window.location.href = "b.html";
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed");
      });
  });
