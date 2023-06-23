const slider = document.querySelector('.lista-projetos');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'fw5eg9fz84f5',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'rg7_s6I8IWWMgSofh4eQ7MW08XX_WoFiwB1vZF3BoCI'
})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)