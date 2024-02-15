# Joke Generator Web App

This is a simple web application that generates jokes based on different categories such as Programming, Miscellaneous, Dark, Pun, and Spooky. The jokes are fetched from the JokeAPI.

## How to Use

1. **Opening the Web App**:
   - Open the `index.html` file in a web browser to access the web app.

2. **Generating Jokes**:
   - Click on the "Generate Joke" button to fetch a random joke from the JokeAPI.
   - The joke will be displayed along with an emoji indicating its category.

3. **Joke Categories**:
   - The jokes are categorized into Programming, Miscellaneous, Dark, Pun, and Spooky.
   - Each category is represented by a corresponding emoji:
     - Programming: 🖥️
     - Miscellaneous: 🔀
     - Dark: 💀
     - Pun: 🤪
     - Spooky: 👻

4. **Joke Types**:
   - Jokes can be of two types: single-part and two-part.
   - Single-part jokes are displayed directly.
   - Two-part jokes consist of a setup and a delivery, which are displayed separately.

## Code Explanation

- `index.html`: HTML file containing the structure of the web app.
- `script.js`: JavaScript file containing the logic to fetch jokes from the JokeAPI and display them on the web app.
- `style.css`: CSS file containing styles for the web app.

## Dependencies

- This web app uses the `fetch` API to fetch jokes from the JokeAPI.
- It also uses `async/await` to handle asynchronous requests.
- The jokes are displayed dynamically on the web page using DOM manipulation.

## Credits

- This web app uses the [JokeAPI](https://jokeapi.dev/) to fetch jokes.
- Emoji icons are used to represent joke categories.

