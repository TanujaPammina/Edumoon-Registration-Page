document.addEventListener("DOMContentLoaded", function(){

/* ========================= */
/* SAFE FLOATING PARTICLES  */
/* ========================= */

const particleContainer = document.getElementById("particles");

if(particleContainer){
  for(let i=0;i<60;i++){
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random()*5+3;
    particle.style.width = size+"px";
    particle.style.height = size+"px";

    particle.style.left = Math.random()*100+"vw";
    particle.style.animationDuration = (Math.random()*10+10)+"s";

    particleContainer.appendChild(particle);
  }
}


/* ========================= */
/* SCROLL REVEAL            */
/* ========================= */

function revealOnScroll(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ========================= */
/* ANIMATED NUMBER COUNTER  */
/* ========================= */

const counters = document.querySelectorAll(".stat h2");

if(counters.length > 0){
  counters.forEach(counter=>{
    const originalText = counter.innerText;
    const number = parseInt(originalText.replace(/\D/g,""));
    const suffix = originalText.replace(/[0-9]/g,"");

    let count = 0;

    const updateCount = ()=>{
      const increment = number / 100;

      if(count < number){
        count += increment;
        counter.innerText = Math.floor(count) + suffix;
        requestAnimationFrame(updateCount);
      }else{
        counter.innerText = number + suffix;
      }
    };

    updateCount();
  });
}


/* ========================= */
/* HERO PARALLAX (SAFE)     */
/* ========================= */

const hero = document.querySelector(".hero");

if(hero){
  document.addEventListener("mousemove", (e)=>{
    const x = (window.innerWidth - e.pageX)/50;
    const y = (window.innerHeight - e.pageY)/50;

    hero.style.transform =
      `translateX(${x}px) translateY(${y}px)`;
  });
}


/* ========================= */
/* ACCORDION (SYLLABUS)     */
/* ========================= */

const phases = document.querySelectorAll(".phase");

if(phases.length > 0){

  phases.forEach((phase, index) => {

    const content = phase.querySelector(".details");

    // Open first item by default
    if(index === 0){
      phase.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }

    phase.addEventListener("click", function(){

      // Close all others
      phases.forEach(p=>{
        if(p !== phase){
          p.classList.remove("active");
          p.querySelector(".details").style.maxHeight = null;
        }
      });

      // Toggle current
      if(phase.classList.contains("active")){
        phase.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        phase.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }

    });

  });

}

});
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function(){
  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "transparent";
  }
});
const hero = document.querySelector(".hero");

if(hero){
  document.addEventListener("mousemove", (e)=>{
    const x = (window.innerWidth - e.pageX)/50;
    const y = (window.innerHeight - e.pageY)/50;

    hero.style.transform =
      `translateX(${x}px) translateY(${y}px)`;
  });
}