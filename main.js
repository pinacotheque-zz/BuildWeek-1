let heart = document.querySelector('.favourited')
heart.addEventListener('click', function(e) {
  // heart.style.backgroundColor = 'var(--spot-green)'
  heart.style.color = heart.style.color  === 'var(--spot-green)' ? '' : 'var(--spot-green)';
  heart.style.fontWeight = heart.style.fontWeight  === 'bold' ? '' : 'bold';
})

let hearty = document.querySelector('.add-to-favourites')
hearty.addEventListener('click', function(e) {
  // heart.style.backgroundColor = 'var(--spot-green)'
  hearty.style.color = hearty.style.color  === 'var(--spot-green)' ? '' : 'var(--spot-green)';
  hearty.style.fontWeight = hearty.style.fontWeight  === 'bold' ? '' : 'bold';
})