async function getPokemons(number,lang) {
  try {
    // URL de la génération de pokemons
    const urlAPI = `https://pokeapi.co/api/v2/generation/${number}`;
    console.log(urlAPI);

    const response = await fetch(urlAPI);
    const data = await response.json();
    const pokemons = data.pokemon_species;

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
              const pokeName = data.names.filter(langue => langue.language.name === lang)[0].name;
              console.log(pokeName, pokeID, pokeImg);
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
