

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const cartBody = document.getElementById('cartBody');
  const totalDisplay = document.getElementById('total');
  cartBody.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>$${(item.price * item.quantity).toFixed(2)}</td>
      <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
    `;

    total += item.price * item.quantity;
    cartBody.appendChild(row);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.getElementById('buyBtn')?.addEventListener('click', () => {
  const method = document.getElementById('payment').value;
  const confirmation = document.getElementById('confirmation');

  if (cart.length === 0) {
    confirmation.textContent = 'Your cart is empty.';
    return;
  }

  confirmation.textContent = `Thank you for your purchase via ${method}. Your order has been received.`;
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
});

renderCart();
