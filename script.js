const moveButton = document.getElementById('movebtn');
const imageBeforeElement = document.querySelector('.image::before');

moveButton.addEventListener('mousedown', () => {
  imageBeforeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
});

moveButton.addEventListener('mouseup', () => {
  imageBeforeElement.style.backgroundColor = 'transparent';
});
