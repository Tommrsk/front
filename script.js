const blagueBtnElement = document.getElementById('blague-btn');
const blagueTextElement = document.getElementById('blague-text');

blagueBtnElement.addEventListener('click', () => {
  fetch('/blagues/random')
    .then(response => response.json())
    .then(data => {
      blagueTextElement.textContent = `${data.question} - ${data.reponse}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});