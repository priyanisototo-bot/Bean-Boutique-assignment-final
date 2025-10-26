
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  if (!cartList || !totalDisplay) return;

  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = total.toFixed(2);
}


updateCartDisplay();


document.getElementById('searchInput')?.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('#coffeeCatalogue .coffee-card');

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});


const filterButtons = document.querySelectorAll('#filters button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    const cards = document.querySelectorAll('.coffee-card');

    cards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else {
        const category = filter.replace('.', '');
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
      }
    });
  });
});