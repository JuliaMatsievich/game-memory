export const renderFinalPage = (appEl) => {
   const finalPageHtml = `
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
            <button class="button start__button">Старт</button>
            </div>
         </div>
      </div>
	`;
   appEl.innerHTML = finalPageHtml;
};
