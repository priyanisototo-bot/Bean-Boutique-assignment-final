document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.getAttribute('data-plan');
    localStorage.setItem('subscriptionPlan', plan);
    showModal(`You've selected the ${plan} plan. Thank you!`);
  });
});

document.getElementById('secureForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const level = document.getElementById('level').value;

  if (!email || !level) {
    showModal('Please fill out all fields.');
    return;
  }

  const encryptedEmail = btoa(email); 
  localStorage.setItem('subscriberEmail', encryptedEmail);
  localStorage.setItem('subscriberLevel', level);

  showModal(`Subscription confirmed for ${level}. Welcome to Bean Boutique!`);
  this.reset();
});

function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  modalMessage.textContent = message;
  modal.classList.remove('hidden');
}

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});