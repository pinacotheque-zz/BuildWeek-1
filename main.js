let heart = document.querySelector('.favourited')
heart.addEventListener('click', function(e) {
  // heart.style.backgroundColor = 'var(--spot-green)'
  heart.style.color = heart.style.color  === 'var(--spot-green)' ? '' : 'var(--spot-green)';
})