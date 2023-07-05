const getGameField = (gameBlock, qtyCard) => {
   const gameCardHtml = `
   <div class="game__card">
      <img src="./src/img/shirt.png" alt="">
   </div>
`;
   let gameDifficultyarr = [];

   for (let i = 1; i <= qtyCard; i++) {
      gameDifficultyarr.push(gameCardHtml);
   }

   const gameDifficultyHtml = gameDifficultyarr.join("");

   gameBlock.innerHTML = gameDifficultyHtml;
};

export const renderGamePage = (appEl, difficultValue) => {
   const gameHtml = `
   <div class="app__game">
   <div class="header">
      <div class="header__time">
         <span class="time__min">00</span>
         <span class="time__point">.</span>
         <span class="time__sek">00</span>
      </div>
      <div class="header__button">
         <button class="button button__start-again">Начать заново</button>
      </div>
   </div>
   <div class="game">

   </div>
</div>
   `;

   appEl.innerHTML = gameHtml;

   const gameBlock = document.querySelector(".game");

   if (difficultValue === "1") {
      let qtyCard = 12;
      getGameField(gameBlock, qtyCard);
      gameBlock.classList.add("game__difficult_1");
   }

   if (difficultValue === "2") {
      let qtyCard = 18;
      getGameField(gameBlock, qtyCard);
      gameBlock.classList.add("game__difficult_2");
   }

   if (difficultValue === "3") {
      let qtyCard = 36;
      getGameField(gameBlock, qtyCard);
      gameBlock.classList.add("game__difficult_3");
   }
};
