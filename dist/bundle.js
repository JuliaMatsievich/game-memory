/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/null.css":
/*!**************************!*\
  !*** ./src/css/null.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/difficulty-page__component.js":
/*!*********************************************************!*\
  !*** ./src/js/components/difficulty-page__component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderChangeDifficultyPage: () => (/* binding */ renderChangeDifficultyPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/js/index.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ "./src/js/routes.js");



const renderChangeDifficultyPage = (appEl) => {
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
            <button class="button start__button">Старт</button>
            </div>
         </div>
      </div>
	`;
   appEl.innerHTML = changeDifficultyHtml;

   const difficultyContainer = document.querySelector(".difficulty__container");
   difficultyContainer.addEventListener("click", (event) => {
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

   const startBtn = document.querySelector(".start__button");

   startBtn.addEventListener("click", () => {
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE, window.application.level);
   });
};


/***/ }),

/***/ "./src/js/components/game-page__component.js":
/*!***************************************************!*\
  !*** ./src/js/components/game-page__component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomInteger: () => (/* binding */ randomInteger),
/* harmony export */   renderGamePage: () => (/* binding */ renderGamePage),
/* harmony export */   shuffle: () => (/* binding */ shuffle)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./src/js/routes.js");


const randomInteger = (min, max) => {
   let rand = min + Math.random() * (max - min);
   return Math.floor(rand);
};

const shuffle = (arr) => {
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
      newCardsArr.push(_routes_js__WEBPACK_IMPORTED_MODULE_0__.cards[randomInteger(0, 35)]);
   }
   return shuffle([...newCardsArr, ...newCardsArr]);
};

const renderGameField = ({ gameBlock, isOpenCard, isCloseCard, newCards }) => {
   const cardsHtmlArr = newCards.map((card) => {
      return `
      <div class="game__card">
      <img src="${_routes_js__WEBPACK_IMPORTED_MODULE_0__.pathToCard}/shirt.png" alt="" class="card__shirt ${
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

const renderGamePage = (appEl, difficultValue) => {
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


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToPage: () => (/* binding */ goToPage)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.js */ "./src/js/routes.js");
/* harmony import */ var _components_difficulty_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/difficulty-page__component.js */ "./src/js/components/difficulty-page__component.js");
/* harmony import */ var _components_game_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-page__component.js */ "./src/js/components/game-page__component.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_null_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/null.css */ "./src/css/null.css");






const appEl = document.querySelector(".app");

window.application = {
   level: "",
   newCards: "",
};

const goToPage = (newPage, data) => {
   if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DIFFICULTY_PAGE) {
      (0,_components_difficulty_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderChangeDifficultyPage)(appEl);
   }
   if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_0__.GAME_PAGE) {
      (0,_components_game_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderGamePage)(appEl, data);
   }
};

goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DIFFICULTY_PAGE);


/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHANGE_DIFFICULTY_PAGE: () => (/* binding */ CHANGE_DIFFICULTY_PAGE),
/* harmony export */   GAME_PAGE: () => (/* binding */ GAME_PAGE),
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   pathToCard: () => (/* binding */ pathToCard)
/* harmony export */ });
const CHANGE_DIFFICULTY_PAGE = "change_difficulty";
const GAME_PAGE = "game";
const pathToCard = "./static/img";
const cards = [
   `${pathToCard}/туз пики.png`,
   `${pathToCard}/король пики.png`,
   `${pathToCard}/валет пики.png`,
   `${pathToCard}/дама пики.png`,
   `${pathToCard}/10 пики.png`,
   `${pathToCard}/9 пики.png`,
   `${pathToCard}/8 пики.png`,
   `${pathToCard}/7 пики.png`,
   `${pathToCard}/6 пики.png`,
   `${pathToCard}/туз черви.png`,
   `${pathToCard}/король черви.png`,
   `${pathToCard}/валет черви.png`,
   `${pathToCard}/дама черви.png`,
   `${pathToCard}/10 черви.png`,
   `${pathToCard}/9 черви.png`,
   `${pathToCard}/8 черви.png`,
   `${pathToCard}/7 черви.png`,
   `${pathToCard}/6 черви.png`,
   `${pathToCard}/туз крести.png`,
   `${pathToCard}/король крести.png`,
   `${pathToCard}/валет крести.png`,
   `${pathToCard}/дама крести.png`,
   `${pathToCard}/10 крести.png`,
   `${pathToCard}/9 крести.png`,
   `${pathToCard}/8 крести.png`,
   `${pathToCard}/7 крести.png`,
   `${pathToCard}/6 крести.png`,
   `${pathToCard}/туз бубны.png`,
   `${pathToCard}/король бубны.png`,
   `${pathToCard}/валет бубны.png`,
   `${pathToCard}/дама бубны.png`,
   `${pathToCard}/10 бубны.png`,
   `${pathToCard}/9 бубны.png`,
   `${pathToCard}/8 бубны.png`,
   `${pathToCard}/7 бубны.png`,
   `${pathToCard}/6 бубны.png`,
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map