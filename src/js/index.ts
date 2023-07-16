import { CHANGE_DIFFICULTY_PAGE, GAME_PAGE, FINAL_PAGE } from "./routes";
import { renderChangeDifficultyPage } from "./components/difficulty-page__component";
import { renderGamePage } from "./components/game-page__component";
import { renderFinalPage } from "./components/final-page__component";
import "../css/style.css";
import "../css/null.css";

const appEl = document.querySelector(".app");

window.application = {
   level: "",
   newCards: [],
   time: "00.00",
   status: "",
};

export const goToPage = (newPage: string, data?:string) => {
   if (newPage === CHANGE_DIFFICULTY_PAGE) {
      renderChangeDifficultyPage(appEl  as Element);
   }
   if (newPage === GAME_PAGE) {
      renderGamePage(appEl as Element, data as string);
   }
   if (newPage === FINAL_PAGE) {
      renderFinalPage(appEl as Element);
   }
};

goToPage(CHANGE_DIFFICULTY_PAGE);
