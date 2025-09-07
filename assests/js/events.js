async function loadEvents(){
  const grid = document.getElementById('eventsGrid');
  try{
    const res = await fetch('data/events.json');
    const events = await res.json();
    grid.innerHTML = '';
    events.forEach(ev=>{
      const el = document.createElement('article');
      el.className = 'event-card card';
      el.innerHTML = `<img src="assets/images/${ev.image}" alt="${ev.title} poster">
        <h3>${ev.title}</h3>
        <p>${ev.desc}</p>
        <p><strong>${ev.date}</strong></p>`;
      grid.appendChild(el);
    });
  }catch(e){
    grid.innerHTML = '<p>Could not load events.</p>';
  }
}
document.addEventListener('DOMContentLoaded', loadEvents);