// toggle icon navbar

let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





// scrool section link
let sections =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');


        if(top >= offset && top <offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classlist.add('active');
            });
        };
    });


    // sticky nav bar 

    let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);


// toggle icon navbar remove when click navbar link
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

     
};
// scrool reveal 

ScrollReveal({ 
    reset: true, 
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.about-img, .home-content h1,', { origin:'left' });
ScrollReveal().reveal('.about-content p, .home-content p,', { origin:'right' });


// typed js 
const typed = new typed('.multiple-text',{
    strings:['frontend developer','youtube','blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// Initialize Firebase (ADD YOUR OWN DATA)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyB5L1gfNm_FHamRH3CY5LRnEK9WVbqVCGc",
    authDomain: "portfolio-5395e.firebaseapp.com",
    databaseURL: "https://portfolio-5395e-default-rtdb.firebaseio.com",
    projectId: "portfolio-5395e",
    storageBucket: "portfolio-5395e.appspot.com",
    messagingSenderId: "338215022169",
    appId: "1:338215022169:web:fb0521e4e0fd111b62cb48"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }
