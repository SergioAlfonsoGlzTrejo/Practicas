// Obtener los elementos del DOM
let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");
let heightTxt = document.getElementById("pokemon-height");
let weightTxt = document.getElementById("pokemon-weight");
let movesList = document.getElementById("pokemon-moves");
let audio = document.getElementById("pokemon-sound");
let form = document.getElementById("search-form");
let searchInput = document.getElementById("search-input");

// Función para buscar un Pokémon
function fetchPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Pokémon "${pokemonName}" no encontrado`);
      }
      return response.json();
    })
    .then((pokemon) => {
      // Mostrar el nombre
      nombreTxt.innerText = pokemon.name;

      // Mostrar los tipos
      typesList.innerHTML = "";
      let listaTipos = document.createElement("ul");
      pokemon.types.forEach((tipo) => {
        let item = document.createElement("li");
        item.innerText = tipo.type.name;
        listaTipos.appendChild(item);
      });
      typesList.appendChild(listaTipos);

      // Mostrar la altura
      heightTxt.innerText = `${pokemon.height / 10} m`;

      // Mostrar el peso
      weightTxt.innerText = `${pokemon.weight / 10} kg`;

      // Mostrar movimientos (arreglo)
      movesList.innerHTML = "";
      let listaMovimientos = document.createElement("ul");
      pokemon.moves.slice(0, 5).forEach((move) => {
        let item = document.createElement("li");
        item.innerText = move.move.name;
        listaMovimientos.appendChild(item);
      });
      movesList.appendChild(listaMovimientos);

      // Mostrar la imagen
      image.setAttribute("src", pokemon.sprites.front_default);

      // Reproducir el sonido (si está disponible)
      let cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`;
      audio.setAttribute("src", cryUrl);
      audio.classList.remove("hidden");
    })
    .catch((error) => {
      console.error(error.message);

      // Limpiar los datos si hay error
      nombreTxt.innerText = "No encontrado";
      typesList.innerHTML = "";
      heightTxt.innerText = "";
      weightTxt.innerText = "";
      movesList.innerHTML = "";
      image.setAttribute("src", "");
      audio.classList.add("hidden");
    });
}

// Escuchar el envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar que recargue la página
  let pokemonName = searchInput.value.trim();
  if (pokemonName) {
    fetchPokemon(pokemonName);
  }
});
