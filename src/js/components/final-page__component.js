export const renderFinalPage = (appEl) => {
   const finalPageHtml = `
      <div class="app__popup">
         <div class="popup">
            <div class="popup__container">
					<div class="popup-image">
						<img src='./static/img/win.png'>	
					</div>
               <div class="popup__title popup__title_final">Вы выиграли</div>
               <div class="popup__time-title">Затраченное время:</div>
					<div class="popup__time-text">${window.application.time}</div>
            	<button class="button button__start-again">Играть снова</button>
            </div>
         </div>
      </div>
	`;
   appEl.innerHTML = finalPageHtml;
};
