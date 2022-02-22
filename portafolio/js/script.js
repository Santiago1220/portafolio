function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
  
  
  const obj = document.getElementById("value");
  animateValue(obj, 0, 7, 1000);

  const obj2 = document.getElementById("value2");
  animateValue(obj2, 0, 32, 1000);

  const obj3 = document.getElementById("value3");
  animateValue(obj3, 0, 25, 1500);

  const obj4 = document.getElementById("value4");
  animateValue(obj4, 0, 99, 2500);

  $(function(){
    $('#navbarNav a').click(function () {
        $('#navbarNav a').removeClass('active');
        $(this).addClass('active');
    });
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vYT-t-9D6oHBx2U6Sx-9gaObRq8xKmU",
  authDomain: "portafolio-santiago-restrepo.firebaseapp.com",
  projectId: "portafolio-santiago-restrepo",
  storageBucket: "portafolio-santiago-restrepo.appspot.com",
  messagingSenderId: "185387558411",
  appId: "1:185387558411:web:2a4cc26892d7c40551090e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);