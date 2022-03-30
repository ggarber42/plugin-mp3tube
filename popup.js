const baseUrl = 'https://api-de-tudo.herokuapp.com/downloadMp3'
const videoInput = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const videoUrl = videoInput.value
  if (!videoUrl) return;
  const newTab = window.open(`${baseUrl}?url=${videoUrl}`, "_blank");
  newTab.focus();
})
