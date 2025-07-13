//your JS code here. If required.
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

// 1) Open modal
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// 2) Close modal when clicking on close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 3) Close modal when clicking outside modal-content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

