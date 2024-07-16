let pokemonContainer = document.getElementById("pokemon");
let pokemonForm = document.getElementById("pokemon-form");

// Fetch Pokemon
const fetchSinglePokemon = async (pokemonNameOrID) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrID}`
  );

  // Create Pokemon Card
  const pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemon-card";

  console.log(response);

  if (response.status === 404) {
    pokemonContainer.innerHTML = "";
    pokemonCard.innerHTML = `
      <h3>Pokemon Not Found</h3>
    `;
    return pokemonContainer.appendChild(pokemonCard);
  }

  const pokemon = await response.json();

  // Get Pokemon Types
  const types = pokemon.types.map(
    (type) => `
    <span>${type.type.name}</span>`
  );

  // Display Pokemon Card
  pokemonCard.innerHTML = `
    <img src="${pokemon.sprites.front_default}" />
    <h3>${pokemon.name}</h3>
    <p>Type: ${types}</p>
    <p>Height: ${pokemon.height}</p>
    <p>Weight: ${pokemon.weight}</p>
    `;

  pokemonContainer.innerHTML = "";

  // Append Pokemon Card to Pokemon Container
  pokemonContainer.appendChild(pokemonCard);
};

// Create Pokemon

pokemonForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(pokemonForm);

  fetchSinglePokemon(formData.get("name"));
});
