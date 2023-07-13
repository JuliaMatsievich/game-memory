import { cards, pathToCard } from "../routes.js";

export const randomInteger = (min, max) => {
   let rand = min + Math.random() * (max - min);
   return Math.floor(rand);
};

export const shuffle = (arr) => {
   let j, temp;
   for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
   }
   return arr;
};

const generatedCards = (qtyCard) => {
   const newCardsArr = [];

   for (let i = 1; i <= qtyCard / 2; i++) {
      newCardsArr.push(cards[randomInteger(0, 35)]);
   }
   return shuffle([...newCardsArr, ...newCardsArr]);
};

const renderGameField = ({ gameBlock, isOpenCard, isCloseCard, newCards }) => {
   const cardsHtmlArr = newCards.map((card) => {
      return `
      <div class="game__card">
      <img src="${pathToCard}/shirt.png" alt="" class="card__shirt ${
         isOpenCard ? "hidden" : ""
      }">
      <img src="${card}" alt="" class="card__open ${
         isCloseCard ? "hidden" : ""
      }">
      </div>
   `;
   });

   const cardsHtml = cardsHtmlArr.join("");

   gameBlock.innerHTML = cardsHtml;
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

   const clickBtnStartGame = (gameBlock) => {
      const btnStartGame = document.querySelector(".button__start-game");
      btnStartGame.addEventListener("click", () => {
         renderGameField({
            gameBlock,
            isCloseCard: false,
            isOpenCard: true,
            newCards: window.application.newCards,
         });

         setTimeout(renderGameField, 5000, {
            gameBlock,
            isCloseCard: true,
            isOpenCard: false,
            newCards: window.application.newCards,
         });
      });
   };
   const cardsOpenArr = [];
   const clickCard = () => {
      const cardBlock = document.querySelector(".game");
      let counter = 0;
      cardBlock.addEventListener("click", (event) => {
         const target = event.target;
         const gameCard = target.closest(".game__card");
         const cardClose = gameCard.querySelector(".card__shirt");
         const cardOpen = gameCard.querySelector(".card__open");
         const cardsSrc = cardOpen.getAttribute("src");
         cardsOpenArr.push(cardsSrc);
         if (target.classList.contains("card__shirt")) {
            cardClose.classList.add("hidden");
            cardOpen.classList.remove("hidden");
         }
         counter += 1;

         if (counter === 2) {
            if (cardsOpenArr[0] === cardsOpenArr[1]) {
               setTimeout(alert, 500, "Вы выиграли");
            } else {
               setTimeout(alert, 500, "Вы проиграли");
            }
         }
      });
   };

   let qtyCard = "";

   if (difficultValue === "1") {
      qtyCard = 12;
   }

   if (difficultValue === "2") {
      qtyCard = 18;
   }

   if (difficultValue === "3") {
      qtyCard = 36;
   }

   window.application.newCards = generatedCards(qtyCard);
   renderGameField({
      gameBlock,
      isCloseCard: true,
      isOpenCard: false,
      newCards: window.application.newCards,
   });
   gameBlock.classList.add(`game__difficult_${difficultValue}`);
   clickBtnStartGame(gameBlock);
   clickCard();
};
