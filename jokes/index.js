var jokeJSON
const api = 'https://official-joke-api.appspot.com/random_joke'
const imgAPI = 'https://random.dog/woof.json'
window.onload = getJoke();

async function getJoke() {
    fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    jokeJSON = data;
    document.getElementById("display").innerHTML = data.setup
    setTimeout(punchline, 5000);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

  function punchline() {
document.getElementById("displayPunchline").innerHTML = jokeJSON.punchline
getImage()
  }

async function getImage() {
    fetch(imgAPI)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("photo").src = data.url
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function reload() {
  getJoke();
  document.getElementById("displayPunchline").innerHTML = " "
  document.getElementById("photo").src = " "
}