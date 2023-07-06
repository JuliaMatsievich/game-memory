import { cards } from "../routes.js";

function randomInteger(min, max) {
   // случайное число от min до (max+1)
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

const gameFieldOpenCards = (gameBlock, qtyCard) => {
   const newCardsArr = [];

   for (let i = 1; i <= qtyCard; i++) {
      newCardsArr.push(cards[randomInteger(1, qtyCard)]);
   }

   const cardsHtmlArr = newCardsArr.map((card) => {
      return `
      <div class="game__card">
      ${card}
      </div>
   `;
   });

   const cardsHtml = cardsHtmlArr.join("");

   gameBlock.innerHTML = cardsHtml;
};

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
            <button class="button button__start-game">Начать</button>
         </div>
      </div>
      <div class="game">

      </div>
   </div>
   `;

   appEl.innerHTML = gameHtml;

   const gameBlock = document.querySelector(".game");

   const clickBtnStartGame = (gameBlock, qtyCard) => {
      const btnStartGame = document.querySelector(".button__start-game");
      btnStartGame.addEventListener("click", () => {
         gameFieldOpenCards(gameBlock, qtyCard);
         setTimeout(getGameField, 5000, gameBlock, qtyCard);
      });
   };

   if (difficultValue === "1") {
      let qtyCard = 12;
      getGameField(gameBlock, qtyCard);
      gameBlock.classList.add("game__difficult_1");
      clickBtnStartGame(gameBlock, qtyCard);
   }

   if (difficultValue === "2") {
      let qtyCard = 18;
      getGameField(gameBlock, qtyCard);
      gameBlock.classList.add("game__difficult_2");
      clickBtnStartGame(gameBlock, qtyCard);
   }

   if (difficultValue === "3") {
      let qtyCard = 36;
      getGameField(gameBlock, qtyCard);
      gameBlock.classList.add("game__difficult_3");
      clickBtnStartGame(gameBlock, qtyCard);
   }
};
