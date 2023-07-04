import { CHANGE_DIFFICULTY_PAGE, GAME_PAGE } from "./routes.js";
import { renderChangeDifficultyPage } from "./components/difficulty-page__component.js";
import { renderGamePage } from "./components/game-page__component.js";

const appEl = document.querySelector(".app");

// const globalStage = {
// 	time: time,
// 	difficulty: difficulty,
// 	status: status,
// 	generateCards: generateCards,
// 	changeCards: changeCards
// }

export const goToPage = (newPage, data) => {
   if (newPage === CHANGE_DIFFICULTY_PAGE) {
      renderChangeDifficultyPage(appEl);
   }
   if (newPage === GAME_PAGE) {
      renderGamePage(appEl, data);
   }
};

goToPage(CHANGE_DIFFICULTY_PAGE);