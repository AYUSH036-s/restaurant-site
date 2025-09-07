// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{ if(e.isIntersecting){ e.target.classList.add('rise'); } });
},{threshold:.15});
document.querySelectorAll('.card, .menu-item, .event-card').forEach(el=>observer.observe(el));