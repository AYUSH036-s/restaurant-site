(function(){
  const carousel = document.querySelector('.carousel');
  if(!carousel) return;
  const slides = carousel.querySelector('.slides');
  const slideEls = carousel.querySelectorAll('.slide');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const dots = carousel.querySelector('.dots');

  let index = 0;
  const total = slideEls.length;

  // Build dots
  slideEls.forEach((_,i)=>{
    const b=document.createElement('button');
    b.setAttribute('aria-label','Go to slide '+(i+1));
    b.addEventListener('click',()=>go(i));
    dots.appendChild(b);
  });

  function update(){
    slides.style.transform = `translateX(-${index*100}%)`;
    dots.querySelectorAll('button').forEach((d,i)=>d.classList.toggle('active', i===index));
  }
  function go(i){
    index = (i+total)%total;
    update();
  }

  prev.addEventListener('click',()=>go(index-1));
  next.addEventListener('click',()=>go(index+1));

  let timer;
  function start(){
    if(carousel.dataset.autoplay==='true'){
      timer = setInterval(()=>go(index+1), parseInt(carousel.dataset.interval||3500,10));
    }
  }
  function stop(){ if(timer) clearInterval(timer); }
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  start();
  update();
})();