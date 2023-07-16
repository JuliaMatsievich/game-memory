import { FINAL_PAGE, cards, pathToCard } from "../routes";
import { goToPage } from "../index";

export const randomInteger = (min: number, max: number) => {
   let rand = min + Math.random() * (max - min);
   return Math.floor(rand);
};

export const shuffle = (arr: Array<any>) => {
   let j, temp;
   for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
   }
   return arr;
};
let sec: number = 0;
let min: number = 0;

const timer = (minBlock: Element, secBlock: Element) => {
   sec++;
   if (sec === 60) {
      min++;
      sec = 0;
   }
   secBlock.textContent = "0" + <string>(<any>sec);
   if (sec > 9) {
      secBlock.textContent = <string>(<any>sec);
   }
   minBlock.textContent = "0" + <string>(<any>min);
   if (min > 9) {
      minBlock.textContent = <string>(<any>min);
   }
};

let timerId: Number;

const generatedCards = (qtyCard: number) => {
   const newCardsArr = [];

   for (let i = 1; i <= qtyCard / 2; i++) {
      newCardsArr.push(cards[randomInteger(0, 35)]);
   }
   return shuffle([...newCardsArr, ...newCardsArr]);
};

const renderGameField = (render: Render) => {
   const cardsHtmlArr = render.newCards.map((card: string) => {
      return `
      <div class="game__card">
      <img src="${pathToCard}/shirt.png" alt="" class="card__shirt ${
         render.isOpenCard ? "hidden" : ""
      }">
      <img src="${pathToCard}/${card}" alt="" class="card__open ${
         render.isCloseCard ? "hidden" : ""
      }">
      </div>
   `;
   });

   const cardsHtml = cardsHtmlArr.join("");

   render.gameBlock.innerHTML = cardsHtml;
};

export const renderGamePage = (appEl: Element, difficultValue: String) => {
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
   const clickBtnStartGame = (gameBlock: Element) => {
      const btnStartGame = document.querySelector(".button__start-game");
      btnStartGame?.addEventListener("click", () => {
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
         setTimeout(() => {
            gameBlock.classList.remove("game__disabled");
         }, 5000);

         timerId = setInterval(timer, 1000, minBlock, secBlock);
      });
   };
   const cardsOpenArr: Array<Element> = [];
   const cardsOpenArrSrc: Array<string> = [];
   let tryCounter = 0;
   let openCardCounter = 0;
   const clickCard = () => {
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
            cardClose?.classList.add("hidden");
            cardOpen?.classList.remove("hidden");
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
                  renderGameField({
                     gameBlock: gameBlock as Element,
                     isCloseCard: false,
                     isOpenCard: true,
                     newCards: window.application.newCards,
                  });
                  goToPage(FINAL_PAGE);
               }
            } else {
               counter = 0;
               tryCounter += 1;
               setTimeout(() => {
                  (cardsOpenArr[0]
                     .querySelector(".card__shirt") as Element)
                     .classList.remove("hidden");
                  (cardsOpenArr[1]
                     .querySelector(".card__shirt")  as Element)
                     .classList.remove("hidden");
                  (cardsOpenArr[0]
                     .querySelector(".card__open") as Element)
                     .classList.add("hidden");
                  (cardsOpenArr[1]
                     .querySelector(".card__open") as Element)
                     .classList.add("hidden");
               }, 600);

               setTimeout(() => {
                  cardsOpenArr.splice(0, 2);
                  cardsOpenArrSrc.splice(0, 2);
               }, 700);

               if (tryCounter === 3) {
                  clearInterval(timerId as number);
                  window.application.time = `${minBlock?.textContent}:${secBlock?.textContent}`;
                  window.application.status = "lost";
                  renderGameField({
                     gameBlock: gameBlock as Element,
                     isCloseCard: false,
                     isOpenCard: true,
                     newCards: window.application.newCards,
                  });
                  goToPage(FINAL_PAGE);
               }
            }
         }
      });
   };

   let qtyCard: number = 0;

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
      gameBlock: gameBlock as Element,
      isCloseCard: true,
      isOpenCard: false,
      newCards: window.application.newCards,
   });
   gameBlock?.classList.add(`game__difficult_${difficultValue}`);
   clickBtnStartGame(gameBlock as Element);
   clickCard();
};
