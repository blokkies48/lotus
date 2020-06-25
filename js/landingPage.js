const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const burger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')
const subHeadline = document.querySelector('.subHeadline')

const timeline1 = new TimelineMax();
const timeline2 = new TimelineMax();

timeline1.fromTo
    (hero,1.5,{height: "0%"}, {height: "100%" })
    
    .fromTo(headline,2,{opacity: "0"}, {opacity: "1" },"-=0.9")
    .fromTo(subHeadline,2,{opacity: "0"}, {opacity: "1" },"-=0.9")
      


   
    
