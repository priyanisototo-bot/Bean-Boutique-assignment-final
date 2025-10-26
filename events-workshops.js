document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.event-card button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const eventName = button.parentElement.querySelector('h3').textContent;

     
      alert(`Thanks for RSVPing to "${eventName}"! We'll send you updates soon.`);

      button.textContent = '✓ RSVP Confirmed';
      button.disabled = true;
      button.style.backgroundColor = '#b86c7a';
      button.style.cursor = 'default';
    });
  });
});