import { goToPage } from "../index.js";
import { GAME_PAGE } from "../routes.js";

export const renderChangeDifficultyPage = (appEl) => {
   const changeDifficultyHtml = `
      <div class="app__popup">
         <div class="popup">
            <div class="popup__container">
               <div class="popup__title">Выбери сложность</div>
                  <div class="popup__content popup__content-difficulty">
                     <div class="difficulty__container">
                        <div class="difficulty__block">
                           <input id="difficult-1" type="radio" name="radio" value="1" class="difficulty__input">1
                        </div>
                     <div class="difficulty__block">
                     <input id="difficult-2" type="radio" name="radio" value="2" class="difficulty__input">2
                  </div>
                  <div class="difficulty__block">
                     <input id="difficult-3" type="radio" name="radio" value="3" class="difficulty__input">3
                  </div>
               </div>
            </div>
            <button class="button start__button disabled" disabled>Старт</button>
            </div>
         </div>
      </div>
	`;
   appEl.innerHTML = changeDifficultyHtml;
   const startBtn = document.querySelector(".start__button");

   const difficultyContainer = document.querySelector(".difficulty__container");
   difficultyContainer.addEventListener("click", (event) => {
      startBtn.classList.remove('disabled');
      startBtn.disabled = false;
      const target = event.target;

      const difficultInputTarget = target.querySelector("input");
      window.application.level = difficultInputTarget.getAttribute("value");

      const difficultBlockTarget = target.closest(".difficulty__block");

      const difficultInputs = document.querySelectorAll(".difficulty__input");

      for (let difficultInput of difficultInputs) {
         const difficultBlock = difficultInput.closest(".difficulty__block");
         difficultBlock.classList.remove("difficulty__block_checked");
         difficultInput.checked = false;
         difficultBlockTarget.classList.add("difficulty__block_checked");
         difficultInputTarget.checked = !difficultInputTarget.checked;
      }
   });

   

   startBtn.addEventListener("click", () => {
      goToPage(GAME_PAGE, window.application.level);
   });
};
