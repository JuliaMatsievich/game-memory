import { goToPage } from "../index";
import { GAME_PAGE } from "../routes";

export const renderChangeDifficultyPage = (appEl:Element): void => {
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
   difficultyContainer?.addEventListener("click", (event) => {
      startBtn?.classList.remove("disabled");
      (startBtn  as HTMLButtonElement).disabled = false;
      const target = event.target as Element;

      const difficultInputTarget = target?.querySelector("input");
      window.application.level = difficultInputTarget?.getAttribute("value") as string;

      const difficultBlockTarget = target?.closest(".difficulty__block");

      const difficultInputs = document.querySelectorAll(".difficulty__input");

      difficultInputs.forEach(difficultInput => {
         const difficultBlock = difficultInput.closest(".difficulty__block");
         difficultBlock?.classList.remove("difficulty__block_checked");
        (difficultInput as HTMLInputElement).checked  = false;
         difficultBlockTarget?.classList.add("difficulty__block_checked");
         (difficultInputTarget as HTMLInputElement).checked = !(difficultInputTarget as HTMLInputElement).checked;
      })
   });

   startBtn?.addEventListener("click", () => {
      goToPage(GAME_PAGE, window.application.level);
   });
};
