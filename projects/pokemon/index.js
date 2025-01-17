async function getPokemons(number,lang) {
  try {
    // URL de la génération de pokemons
    const urlAPI = `https://pokeapi.co/api/v2/generation/${number}`;
    console.log(urlAPI);

    const response = await fetch(urlAPI);
    const data = await response.json();
    const pokemons = data.pokemon_species;
    const pokemonDetails = [];

    pokemons.forEach(pokemon => {
      const pokeName = pokemon.name;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => response.json())
        .then(dataInfo => {
          const pokeName = dataInfo.name;
          const pokeID = dataInfo.id;
          const pokeImg = dataInfo.sprites.front_shiny;
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              const pokeName = data.names.filter(langue => langue.language.name === lang)[0].name;
              pokemonDetails.push({ pokeID, pokeName, pokeImg });

              if (pokemonDetails.length === pokemons.length) {
                pokemonDetails.sort((a, b) => a.pokeID - b.pokeID);

                // Création de la liste des Pokémon
                const pokemonList = document.createElement('ul');
                pokemonList.classList.add('pokemon-list');

                pokemonDetails.forEach(pokemon => {
                  console.log(pokemon.pokeName, pokemon.pokeID, pokemon.pokeImg);

                  // Création de l'élément de liste pour chaque Pokémon
                  const pokemonItem = document.createElement('li');
                  pokemonItem.classList.add('pokemon-item');
                  pokemonItem.innerHTML = `
                    <div class="pokemon">
                      ${pokemon.pokeID} - ${pokemon.pokeName}
                      <img src="${pokemon.pokeImg}" alt="${pokemon.pokeName}" />
                    </div>
                  `;

                  pokemonList.appendChild(pokemonItem);
                });

                // Ajout de la liste des Pokémon au DOM
                const container = document.createElement('div');
                container.classList.add('pokemon-container');
                container.appendChild(pokemonList);
                document.body.appendChild(container);
              }
            });

        });
    });
  } catch (error) {
    console.log('Fetch error:', error.message);
  } finally {
    console.log('Fetch finished');
  }
}

getPokemons(1, 'fr');
