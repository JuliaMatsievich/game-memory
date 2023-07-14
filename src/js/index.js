import { CHANGE_DIFFICULTY_PAGE, GAME_PAGE, FINAL_PAGE } from "./routes.js";
import { renderChangeDifficultyPage } from "./components/difficulty-page__component.js";
import { renderGamePage } from "./components/game-page__component.js";
import { renderFinalPage } from "./components/final-page__component.js";
import "../css/style.css";
import "../css/null.css";

const appEl = document.querySelector(".app");

window.application = {
   level: "",
   newCards: "",
   time: "00.00",
   status: "",
};

export const goToPage = (newPage, data) => {
   if (newPage === CHANGE_DIFFICULTY_PAGE) {
      renderChangeDifficultyPage(appEl);
   }
   if (newPage === GAME_PAGE) {
      renderGamePage(appEl, data);
   }
   if (newPage === FINAL_PAGE) {
      renderFinalPage(appEl);
   }
};

goToPage(FINAL_PAGE);
