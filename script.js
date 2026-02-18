document.addEventListener("DOMContentLoaded", function(){

/* ========================= */
/* FLOATING PARTICLES       */
/* ========================= */

const particleContainer = document.getElementById("particles");

if(particleContainer){
  for(let i=0;i<60;i++){
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random()*5 + 3;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random()*100 + "vw";
    particle.style.animationDuration = (Math.random()*10 + 10) + "s";

    particleContainer.appendChild(particle);
  }

  /* 🔥 IMPORTANT FIX — allow clicks through particles */
  particleContainer.style.pointerEvents = "none";
}


/* ========================= */
/* SCROLL REVEAL            */
/* ========================= */

function revealOnScroll(){
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ========================= */
/* NUMBER COUNTER           */
/* ========================= */

document.querySelectorAll(".stat h2").forEach(counter=>{

  const original = counter.innerText;
  const number = parseInt(original.replace(/\D/g,""));
  const suffix = original.replace(/[0-9]/g,"");

  let count = 0;

  function update(){
    const increment = number / 100;
    if(count < number){
      count += increment;
      counter.innerText = Math.floor(count) + suffix;
      requestAnimationFrame(update);
    } else {
      counter.innerText = number + suffix;
    }
  }

  update();
});


/* ========================= */
/* HERO PARALLAX            */
/* ========================= */

const hero = document.querySelector(".hero");

if(hero){
  document.addEventListener("mousemove", e=>{
    hero.style.transform =
      `translate(${(window.innerWidth-e.pageX)/50}px,
                 ${(window.innerHeight-e.pageY)/50}px)`;
  });
}


/* ========================= */
/* SYLLABUS ACCORDION       */
/* ========================= */

const phases = document.querySelectorAll(".phase");

phases.forEach((phase,index)=>{

  const content = phase.querySelector(".details");

  if(index === 0){
    phase.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  phase.addEventListener("click", ()=>{

    phases.forEach(p=>{
      if(p !== phase){
        p.classList.remove("active");
        p.querySelector(".details").style.maxHeight = null;
      }
    });

    if(phase.classList.contains("active")){
      phase.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      phase.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
});


/* ========================= */
/* NAVBAR SCROLL EFFECT     */
/* ========================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
  navbar.style.background = window.scrollY > 50
    ? "rgba(0,0,0,0.4)"
    : "rgba(0,0,0,0.75)";
});

});
