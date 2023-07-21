import { goToPage } from "../index";
import { CHANGE_DIFFICULTY_PAGE } from "../routes";

export const renderFinalPage = (appEl:Element): void => {
   const status = window.application.status;
   const finalPageHtml = `
		<div class="app__fon"></div>
      <div class="app__popup app__popup_final">
         <div class="popup">
            <div class="popup__container">
					<div class="popup-image">
						<img src='./static/img/${status === "win" ? "win.png" : "lost.png"}'>	
					</div>
               <div class="popup__title popup__title_final">${
                  status === "win" ? "Вы выиграли" : "Вы проиграли"
               }</div>
               <div class="popup__time-title">Затраченное время:</div>
					<div class="popup__time-text">${window.application.time}</div>
            	<button class="button button__start-again">Играть снова</button>
            </div>
         </div>
      </div>
	`;

   appEl.insertAdjacentHTML("beforeend", finalPageHtml);

   const btnStartAgain = document.querySelector(".button__start-again");
   btnStartAgain?.addEventListener("click", () => {
      goToPage(CHANGE_DIFFICULTY_PAGE);
   });
};
