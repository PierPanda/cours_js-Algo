// Sélection des boutons
const buttons = document.querySelectorAll(".btn");
const allBtn = document.getElementById('all');
const random = document.getElementById('random');

// Création des éléments HTML
const infos = document.querySelector('.infos');

// Buttons
buttons.forEach((btn) => {
  // Fetch API avec async await
  btn.addEventListener('click', async () => {
    const num = btn.textContent;
    const urlAPI = `https://swapi.dev/api/people/${num}`;
    try {
      const response = await fetch(urlAPI);
      const perso = await response.json();
      console.log(perso);

      // Création des élément du DOM
      const nomElement = document.createElement('h2');
      const tailleElement = document.createElement('p');
      const poidsElement = document.createElement('p');

      // Mise à jour du contenu des éléments HTML
      nomElement.textContent = `Nom: ${perso.name}`;
      tailleElement.textContent = `Taille: ${perso.height} cm`;
      poidsElement.textContent = `Poids: ${perso.mass} kg`;
      console.log('DOM updated:', perso.name, perso.height, perso.mass);

      // Ajout des éléments au DOM
      infos.appendChild(nomElement);
      infos.appendChild(tailleElement);
      infos.appendChild(poidsElement);

    } catch (error) {
      console.log('Fetch error:', error.message);
    } finally {
      console.log('Fetch finished');
    }
  });
});

//Random button
random.addEventListener('click', async () => {
  const num = buttons[Math.floor(Math.random() * buttons.length)].textContent;
  const urlAPI = `https://swapi.dev/api/people/${num}`;
  try {
    const response = await fetch(urlAPI);
    const perso = await response.json();
    console.log(perso);

    // Création des élément du DOM
    const nomElement = document.createElement('h2');
    const tailleElement = document.createElement('p');
    const poidsElement = document.createElement('p');

    // Mise à jour du contenu des éléments HTML
    nomElement.textContent = `Nom: ${perso.name}`;
    tailleElement.textContent = `Taille: ${perso.height} cm`;
    poidsElement.textContent = `Poids: ${perso.mass} kg`;
    console.log('DOM updated:', perso.name, perso.height, perso.mass);

    // Ajout des éléments au DOM
    infos.appendChild(nomElement);
    infos.appendChild(tailleElement);
    infos.appendChild(poidsElement);


  } catch (error) {
    console.log('Fetch error:', error.message);
  } finally {
    console.log('Fetch finished');
  }
});
