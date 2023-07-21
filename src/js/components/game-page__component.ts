import {
   FINAL_PAGE,
   cards,
   pathToCard,
   CHANGE_DIFFICULTY_PAGE,
} from "../routes";
import { goToPage } from "../index";
import { randomInteger, shuffle } from "../helpFunctions";

interface Render {
   gameBlock: Element;
   isRotateCard: boolean;
   newCards: Array<string>;
}

let sec: number = 0;
let min: number = 0;

const timer = (minBlock: Element, secBlock: Element): void => {
   sec++;
   if (sec === 60) {
      min++;
      sec = 0;
   }
   secBlock.textContent = "0" + sec;
   if (sec > 9) {
      secBlock.textContent = String(sec);
   }
   minBlock.textContent = "0" + min;
   if (min > 9) {
      minBlock.textContent = String(min);
   }
};

let timerId: number;

const generatedCards = (qtyCard: number): Array<string> => {
   const newCardsArr = [];

   for (let i = 1; i <= qtyCard / 2; i++) {
      newCardsArr.push(cards[randomInteger(0, 35)]);
   }
   return shuffle([...newCardsArr, ...newCardsArr]);
};

const renderGameField = (render: Render): void => {
   const cardsHtmlArr = render.newCards.map((card: string) => {
      return `
      <div class="game__card">
      <img src="${pathToCard}/${card}" alt="" class="card__open ${
         render.isRotateCard ? "card__open_rotate" : ""
      }">
      <img src="${pathToCard}/shirt.png" alt="" class="card__shirt ${
         render.isRotateCard ? "card__shirt_rotate" : ""
      }">
      </div>
   `;
   });

   const cardsHtml = cardsHtmlArr.join("");

   render.gameBlock.innerHTML = cardsHtml;
};

const renderGameFieldOpenCards = (gameBlock: Element): void => {
   renderGameField({
      gameBlock,
      isRotateCard: true,
      newCards: window.application.newCards,
   });
};

const renderGameFieldClosedCards = (gameBlock: Element): void => {
   renderGameField({
      gameBlock,
      isRotateCard: false,
      newCards: window.application.newCards,
   });
};

export const renderGamePage = (
   appEl: Element,
   difficultValue: String
): void => {
   const gameHtml = `
   <div class="app__game">
      <div class="header">
         <div class="header__time">
            <span class="time__min">00</span>
            <span class="time__point">.</span>
            <span class="time__sec">00</span>
         </div>
         <div class="header__button">
            <button class="button button__start-game">Начать</button>
            <button class="button button__difficulty">Выбрать сложность</button>
         </div>
      </div>
      <div class="subtitle">У вас есть 3 права на ошибку</div>
      <div class="game game__disabled">

      </div>
   </div>
   `;

   appEl.innerHTML = gameHtml;

   const gameBlock = document.querySelector(".game");
   const minBlock = document.querySelector(".time__min");
   const secBlock = document.querySelector(".time__sec");

   const clickBtnChangeDifficult = (): void => {
      const buttonDifficulty = document.querySelector(".button__difficulty");
      buttonDifficulty?.addEventListener("click", () => {
         goToPage(CHANGE_DIFFICULTY_PAGE);
      });
   };

   const clickBtnStartGame = (gameBlock: Element): void => {
      const btnStartGame = document.querySelector(".button__start-game");
      btnStartGame?.addEventListener("click", () => {
         renderGameFieldOpenCards(gameBlock);
         setTimeout(renderGameFieldClosedCards, 5000, gameBlock);
         setTimeout(() => {
            gameBlock.classList.remove("game__disabled");
         }, 5000);
         setTimeout(() => {
            btnStartGame?.classList.add("disabled");
            (btnStartGame  as HTMLButtonElement).disabled = true;
         },500);
         timerId = setInterval(timer, 1000, minBlock, secBlock);
      });
   };

   const cardsOpenArr: Array<Element> = [];
   const cardsOpenArrSrc: Array<string> = [];
   let tryCounter = 0;
   let openCardCounter = 0;

   const clickCard = (): void => {
      const cardBlock = document.querySelector(".game");
      let counter = 0;

      cardBlock?.addEventListener("click", (event) => {
         const target = event.target as Element;
         const gameCard = target.closest(".game__card");
         const cardClose = gameCard?.querySelector(".card__shirt");
         const cardOpen = gameCard?.querySelector(".card__open");
         const cardsSrc = cardOpen?.getAttribute("src");

         cardsOpenArr.push(gameCard as Element);
         cardsOpenArrSrc.push(cardsSrc as string);

         if (target.classList.contains("card__shirt")) {
            cardClose?.classList.add("card__shirt_rotate");
            cardOpen?.classList.add("card__open_rotate");
         }

         counter += 1;

         if (counter === 2) {
            if (cardsOpenArrSrc[0] === cardsOpenArrSrc[1]) {
               counter = 0;
               cardsOpenArr.splice(0, 2);
               cardsOpenArrSrc.splice(0, 2);
               tryCounter = 0;
               openCardCounter += 2;

               if (openCardCounter === window.application.newCards.length) {
                  clearInterval(timerId as number);
                  window.application.time = `${minBlock?.textContent}:${secBlock?.textContent}`;
                  window.application.status = "win";
                  setTimeout(renderGameFieldOpenCards, 700, gameBlock);
                  setTimeout(() => {
                     goToPage(FINAL_PAGE);
                  }, 1000);
               }
            } else {
               counter = 0;
               tryCounter += 1;

               setTimeout(() => {
                  cardsOpenArr.forEach((card: Element) => {
                     card
                        .querySelector(".card__shirt")
                        ?.classList.remove("card__shirt_rotate");
                     card
                        .querySelector(".card__open")
                        ?.classList.remove("card__open_rotate");
                  });
               }, 600);

               setTimeout(() => {
                  cardsOpenArr.splice(0, 2);
                  cardsOpenArrSrc.splice(0, 2);
               }, 700);

               if (tryCounter === 3) {
                  clearInterval(timerId as number);
                  window.application.time = `${minBlock?.textContent}:${secBlock?.textContent}`;
                  window.application.status = "lost";
                  setTimeout(renderGameFieldOpenCards, 700, gameBlock);
                  setTimeout(() => {
                     goToPage(FINAL_PAGE);
                  }, 1000);
               }
            }
         }
      });
   };

   let qtyCard: number = 0;

   if (difficultValue === "1") qtyCard = 6;

   if (difficultValue === "2") qtyCard = 12;

   if (difficultValue === "3") qtyCard = 18;

   window.application.newCards = generatedCards(qtyCard);
   renderGameFieldClosedCards(gameBlock as Element);
   gameBlock?.classList.add(`game__difficult_${difficultValue}`);
   clickBtnStartGame(gameBlock as Element);
   clickBtnChangeDifficult();
   clickCard();
};
