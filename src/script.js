const app = document.getElementById("app");
const colors = ["red", "yellow", "green", "blue", "black"];
let picker = "";
const canvasSize = 10;
/** Ajout de variable pour une modification plus simple */
const size = "2rem";

/**
 * Rotation: Anthony -> Gloria -> Audren
 * Temps: 3 min
 * Handicap: Anthony 1m
 */
/**
 *
 * Etape 1 ✅
 *
 * afficher la palette de couleurs
 * Le type est une fonction
 * doc : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
 * - Un create element pour créer la palette
 * doc : https://developer.mozilla.org/fr/docs/Web/API/HTMLStyleElement
 * - un style display flex pour l'avoir sur 1 ligne
 * - Boucle sur le tableau -> create element
 * - Une fonction qui va écouter le clique quand je selectionne une couleur
 * doc : https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
 * - rajouter ma couleur à la div
 * - je rajoute la div à l'app
 *
 *
 * Etape 2 ✅
 *
 * - Créer la grille container
 * - Créer un tableau à 2 dimensions (x, y) qui aura la taille de canvasSize.
 * - On rajoute les evenements sur chaque cellule du tableau.
 * - On rajoute les cellules à la ligne
 * - On ajoute la ligne à notre table
 * - On ajoute notre table à notre app
 *
 * Etape 3
 *
 * - Création d'un bouton pour réinitialiser le canva
 * -
 *
 */

/**
 * function generateColorPalet
 * @desc permet de créer une div qui contiendra
 * l'ensemble de nos couleurs du tableau colors.
 */
function generateColorPalet() {
  const container = document.createElement("div");
  container.style.display = "flex";

  for (let i = 0; i < colors.length; i++) {
    const color = document.createElement("td");
    color.style.cursor = "pointer";
    /**
     * - Je vais donner un style à ma td couleur hauteur/largeur
     * doc: https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
     * - je vais créer une fonction qui va écouter le clique pour la séléction de la cellule
     */
    color.style.width = size;
    color.style.height = size;
    /** Injecter une class en js
     * doc: https://developer.mozilla.org/fr/docs/Web/API/Element/classList
     */
    color.classList.add(colors[i]);

    color.addEventListener("click", () => {
      /**
       * Je dois récuperer dans la variable "picker" la valeur de la cellule qui a été cliqué.
       */
      // console.log(`You're choice : ${colors[i]}`);
      picker = colors[i];
    });
    container.appendChild(color);
  }
  app.appendChild(container);
}

/**
 * function generateGrid
 * @desc permet de créer une div qui contiendra
 * le tableau.
 * @param sizeGrid la taille du tableau
 */
function generateGrid(sizeGrid) {
  const table = document.createElement("table");
  //table.classList.add("palette-item");
  // Je créer ma ligne qui contiendra mes cellules
  for (let i = 0; i < sizeGrid; i++) {
    const row = document.createElement("tr");
    // Je créer chaque cellule
    for (let j = 0; j < sizeGrid; j++) {
      const cell = document.createElement("td");
      cell.addEventListener("click", () => {
        if (picker) {
          // Je supprime toutes les classes présentes dans mon td
          cell.classList.remove(...cell.classList);
          // j'ajoute la class du picker
          cell.classList.add(picker);
        } else {
          alert("Veuillez choisir une couleur");
        }
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  app.appendChild(table);
}

/**
 * function clearGrid
 * @desc permet de clear la grille quand celle ci est appelée
 */
function clearGrid() {
  const cells = document.querySelectorAll("table td");
  cells.forEach((cell) => {
    cell.classList.remove(...cell.classList);
  });
}

/**
 * function clearButton
 * @desc création du button pour reset l'ensemble du tableau.
 * Celui ci va appeler la fonction `clearGrid` quand le button sera cliqué.
 */
function clearButton() {
  const button = document.createElement("button");
  button.style.width = "4rem";
  button.innerHTML = "Clear";
  button.addEventListener("click", () => {
    clearGrid();
  });
  app.appendChild(button);
}

/** Génération du pixel Art */
generateColorPalet();
generateGrid(canvasSize);
clearButton();
