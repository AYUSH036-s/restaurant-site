async function loadMenu(){
  const categorySelect = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  const grid = document.getElementById('menuGrid');

  let data;
  try{
    const res = await fetch('data/menu.json');
    data = await res.json();
  }catch(e){
    // Fallback data if fetch fails
    data = {"categories": [{"name": "Starters", "items": [{"name": "Truffle Fries", "price": 220, "desc": "Hand-cut fries, truffle oil, parmesan."}, {"name": "Roasted Tomato Soup", "price": 180, "desc": "Basil oil, garlic croutons."}]}, {"name": "Mains", "items": [{"name": "Smoky Charcoal Pizza", "price": 480, "desc": "Wood-fired base, buffalo mozzarella, basil."}, {"name": "Herb-Grilled Chicken", "price": 520, "desc": "Lemon butter sauce, seasonal greens."}, {"name": "Penne Primavera", "price": 420, "desc": "Garden vegetables, creamy pesto."}]}, {"name": "Desserts", "items": [{"name": "Classic Tiramisu", "price": 260, "desc": "Espresso-soaked ladyfingers, mascarpone."}, {"name": "Chocolate Lava Cake", "price": 280, "desc": "Molten center, vanilla ice cream."}]}, {"name": "Beverages", "items": [{"name": "Cold Brew Coffee", "price": 160, "desc": "Slow-steeped, smooth finish."}, {"name": "Seasonal Mocktail", "price": 180, "desc": "Bartender's choice, fresh fruits."}]}]};
  }

  // Populate categories
  data.categories.forEach(c=>{
    const opt=document.createElement('option');
    opt.value=c.name; opt.textContent=c.name;
    categorySelect.appendChild(opt);
  });

  function render(){
    const term = (searchInput.value||'').toLowerCase();
    const cat = categorySelect.value;
    grid.innerHTML = '';
    data.categories.forEach(c=>{
      if(cat && c.name!==cat) return;
      c.items.forEach(item=>{
        if(term && !(item.name.toLowerCase().includes(term) || item.desc.toLowerCase().includes(term))) return;
        const el = document.createElement('article');
        el.className = 'menu-item';
        el.innerHTML = `<div>
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
          </div>
          <div class="price">₹${item.price}</div>`;
        grid.appendChild(el);
      });
    });
    if(!grid.children.length){
      grid.innerHTML = '<p>No dishes match your search.</p>';
    }
  }

  searchInput.addEventListener('input', render);
  categorySelect.addEventListener('change', render);
  render();
}
document.addEventListener('DOMContentLoaded', loadMenu);