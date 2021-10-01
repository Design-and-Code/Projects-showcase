const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const headers = {
    headers: {
      Accept: "application/json"
    }
  };

  const res = await fetch("https://icanhazdadjoke.com", headers);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}