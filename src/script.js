const app = document.getElementById("app");
const colors = ["red", "yellow", "green", "blue", "black"];
let picker = "";
const canvasSize = 11;
/** Ajout de variable pour une modification plus simple */
const size = "2.5rem";

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
 * Etape 2
 *
 * créer la grille
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

/** Génération du pixel Art */
generateColorPalet();
