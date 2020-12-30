const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navList = document.querySelectorAll('.nav-list li');

  //Toggle Nav
  burger.addEventListener('click', ()=> {
      nav.classList.toggle('nav-active');

  //Animate Links
  navList.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = '';
       } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
  });

  //Burger Animation
  burger.classList.toggle('toggle');

  });
}

navSlide();

//Navigate to Top 
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 


//Page Animations
AOS.init({
    duration: 1200,
  })