function displayPoem(response) {
  new Typewriter("#poem-content", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5d058618c14cod5a413bf1b34t180400";
  let context = `User instructions: You are a common user of a poem's website and you are looking for a short poem with 4 lines of text. This should be structured in HTML, separating each line with a <br/>. The poem must not have a title and should be centered inside the <form></form>`;
  let prompt = `Generate a Portuguese poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
