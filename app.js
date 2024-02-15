const jokeGenrateBtn = document.querySelector("#generate-btn");
const joke = document.querySelector("#joke");
const emoji = document.querySelector("span");

const generateJoke = async () => {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky"
  );
  const data = await res.json();

  let jokeCategory = data.category;

  if (jokeCategory == "Programming") {
    emoji.textContent = "🖥️";
  } else if (jokeCategory == "Misc") {
    emoji.textContent = "🔀";
  } else if (jokeCategory == "Dark") {
    emoji.textContent = "💀";
  } else if (jokeCategory == "Pun") {
    emoji.textContent = "🤪";
  } else {
    emoji.textContent = "👻";
  }

  const jokeType = data.type;
  const jokeText = data.joke;
  const jokeSetup = data.setup;
  const jokeDelivery = data.delivery;

  if (jokeType == "twopart") {
    joke.innerHTML = jokeSetup + "<br><br>" + jokeDelivery;
  } else {
    joke.textContent = jokeText;
  }
};

jokeGenrateBtn.addEventListener("click", generateJoke);
generateJoke();
