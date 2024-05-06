const paragraph = document.querySelector('.copy-me');

paragraph.addEventListener('copy', () => {
  console.log('texto copiado!!');
});

const div = document.querySelector('.box');

div.addEventListener('mousemove', event => {
  div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`;
});

document.addEventListener('wheel', event => {
  console.log(`X: ${event.pageX} | Y: ${event.pageY}`);
});
