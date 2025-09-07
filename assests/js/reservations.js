function loadReservations(){
  return JSON.parse(localStorage.getItem('pinnacle_reservations')||'[]');
}
function saveReservations(list){
  localStorage.setItem('pinnacle_reservations', JSON.stringify(list));
}

document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('reservationForm');
  const list = document.getElementById('reservationsList');

  function render(){
    const reservations = loadReservations();
    list.innerHTML = '';
    reservations.forEach((r, idx)=>{
      const el = document.createElement('div');
      el.className = 'reservation-card';
      el.innerHTML = `<div>
        <strong>${r.name}</strong>
        <div>${r.date} · ${r.time} · ${r.guests} guests</div>
        <div>${r.phone}</div>
      </div>
      <button class="btn btn-ghost" data-i="${idx}">Cancel</button>`;
      list.appendChild(el);
    });
    if(!reservations.length){
      list.innerHTML = '<p>No upcoming reservations yet.</p>';
    }
  }

  list.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-i]');
    if(btn){
      const i = parseInt(btn.dataset.i,10);
      const reservations = loadReservations();
      reservations.splice(i,1);
      saveReservations(reservations);
      render();
    }
  });

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // Simple validation
    if(!data.name || !data.phone || !data.date || !data.time){
      alert('Please fill in all required fields.');
      return;
    }
    const reservations = loadReservations();
    reservations.push(data);
    saveReservations(reservations);
    alert('Reservation confirmed! See it under "Your Upcoming Bookings".');
    form.reset();
    render();
  });

  render();
});