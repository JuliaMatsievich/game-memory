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

/***/ "./src/js/components/difficulty-page__component.ts":
/*!*********************************************************!*\
  !*** ./src/js/components/difficulty-page__component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderChangeDifficultyPage: () => (/* binding */ renderChangeDifficultyPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/js/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./src/js/routes.ts");


var renderChangeDifficultyPage = function (appEl) {
    var changeDifficultyHtml = "\n      <div class=\"app__popup\">\n         <div class=\"popup\">\n            <div class=\"popup__container\">\n               <div class=\"popup__title\">\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</div>\n                  <div class=\"popup__content popup__content-difficulty\">\n                     <div class=\"difficulty__container\">\n                        <div class=\"difficulty__block\">\n                           <input id=\"difficult-1\" type=\"radio\" name=\"radio\" value=\"1\" class=\"difficulty__input\">1\n                        </div>\n                     <div class=\"difficulty__block\">\n                     <input id=\"difficult-2\" type=\"radio\" name=\"radio\" value=\"2\" class=\"difficulty__input\">2\n                  </div>\n                  <div class=\"difficulty__block\">\n                     <input id=\"difficult-3\" type=\"radio\" name=\"radio\" value=\"3\" class=\"difficulty__input\">3\n                  </div>\n               </div>\n            </div>\n            <button class=\"button start__button disabled\" disabled>\u0421\u0442\u0430\u0440\u0442</button>\n            </div>\n         </div>\n      </div>\n\t";
    appEl.innerHTML = changeDifficultyHtml;
    var startBtn = document.querySelector(".start__button");
    var difficultyContainer = document.querySelector(".difficulty__container");
    difficultyContainer === null || difficultyContainer === void 0 ? void 0 : difficultyContainer.addEventListener("click", function (event) {
        startBtn === null || startBtn === void 0 ? void 0 : startBtn.classList.remove("disabled");
        startBtn.disabled = false;
        var target = event.target;
        var difficultInputTarget = target === null || target === void 0 ? void 0 : target.querySelector("input");
        window.application.level = difficultInputTarget === null || difficultInputTarget === void 0 ? void 0 : difficultInputTarget.getAttribute("value");
        var difficultBlockTarget = target === null || target === void 0 ? void 0 : target.closest(".difficulty__block");
        var difficultInputs = document.querySelectorAll(".difficulty__input");
        difficultInputs.forEach(function (difficultInput) {
            var difficultBlock = difficultInput.closest(".difficulty__block");
            difficultBlock === null || difficultBlock === void 0 ? void 0 : difficultBlock.classList.remove("difficulty__block_checked");
            difficultInput.checked = false;
            difficultBlockTarget === null || difficultBlockTarget === void 0 ? void 0 : difficultBlockTarget.classList.add("difficulty__block_checked");
            difficultInputTarget.checked = !difficultInputTarget.checked;
        });
    });
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", function () {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE, window.application.level);
    });
};


/***/ }),

/***/ "./src/js/components/final-page__component.ts":
/*!****************************************************!*\
  !*** ./src/js/components/final-page__component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFinalPage: () => (/* binding */ renderFinalPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/js/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./src/js/routes.ts");


var renderFinalPage = function (appEl) {
    var status = window.application.status;
    var finalPageHtml = "\n\t\t<div class=\"app__fon\"></div>\n      <div class=\"app__popup app__popup_final\">\n         <div class=\"popup\">\n            <div class=\"popup__container\">\n\t\t\t\t\t<div class=\"popup-image\">\n\t\t\t\t\t\t<img src='./static/img/".concat(status === "win" ? "win.png" : "lost.png", "'>\t\n\t\t\t\t\t</div>\n               <div class=\"popup__title popup__title_final\">").concat(status === "win" ? "Вы выиграли" : "Вы проиграли", "</div>\n               <div class=\"popup__time-title\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</div>\n\t\t\t\t\t<div class=\"popup__time-text\">").concat(window.application.time, "</div>\n            \t<button class=\"button button__start-again\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n            </div>\n         </div>\n      </div>\n\t");
    appEl.insertAdjacentHTML("beforeend", finalPageHtml);
    var btnStartAgain = document.querySelector(".button__start-again");
    btnStartAgain === null || btnStartAgain === void 0 ? void 0 : btnStartAgain.addEventListener("click", function () {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes__WEBPACK_IMPORTED_MODULE_1__.CHANGE_DIFFICULTY_PAGE);
    });
};


/***/ }),

/***/ "./src/js/components/game-page__component.ts":
/*!***************************************************!*\
  !*** ./src/js/components/game-page__component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGamePage: () => (/* binding */ renderGamePage)
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes */ "./src/js/routes.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/js/index.ts");
/* harmony import */ var _helpFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpFunctions */ "./src/js/helpFunctions.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var sec = 0;
var min = 0;
var timer = function (minBlock, secBlock) {
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
var timerId;
var generatedCards = function (qtyCard) {
    var newCardsArr = [];
    for (var i = 1; i <= qtyCard / 2; i++) {
        newCardsArr.push(_routes__WEBPACK_IMPORTED_MODULE_0__.cards[(0,_helpFunctions__WEBPACK_IMPORTED_MODULE_2__.randomInteger)(0, 35)]);
    }
    return (0,_helpFunctions__WEBPACK_IMPORTED_MODULE_2__.shuffle)(__spreadArray(__spreadArray([], newCardsArr, true), newCardsArr, true));
};
var renderGameField = function (render) {
    var cardsHtmlArr = render.newCards.map(function (card) {
        return "\n      <div class=\"game__card\">\n      <img src=\"".concat(_routes__WEBPACK_IMPORTED_MODULE_0__.pathToCard, "/").concat(card, "\" alt=\"\" class=\"card__open ").concat(render.isRotateCard ? "card__open_rotate" : "", "\">\n      <img src=\"").concat(_routes__WEBPACK_IMPORTED_MODULE_0__.pathToCard, "/shirt.png\" alt=\"\" class=\"card__shirt ").concat(render.isRotateCard ? "card__shirt_rotate" : "", "\">\n      </div>\n   ");
    });
    var cardsHtml = cardsHtmlArr.join("");
    render.gameBlock.innerHTML = cardsHtml;
};
var renderGameFieldOpenCards = function (gameBlock) {
    renderGameField({
        gameBlock: gameBlock,
        isRotateCard: true,
        newCards: window.application.newCards,
    });
};
var renderGameFieldClosedCards = function (gameBlock) {
    renderGameField({
        gameBlock: gameBlock,
        isRotateCard: false,
        newCards: window.application.newCards,
    });
};
var renderGamePage = function (appEl, difficultValue) {
    var gameHtml = "\n   <div class=\"app__game\">\n      <div class=\"header\">\n         <div class=\"header__time\">\n            <span class=\"time__min\">00</span>\n            <span class=\"time__point\">.</span>\n            <span class=\"time__sec\">00</span>\n         </div>\n         <div class=\"header__button\">\n            <button class=\"button button__start-game\">\u041D\u0430\u0447\u0430\u0442\u044C</button>\n            <button class=\"button button__difficulty\">\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</button>\n         </div>\n      </div>\n      <div class=\"subtitle\">\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C 3 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0443</div>\n      <div class=\"game game__disabled\">\n\n      </div>\n   </div>\n   ";
    appEl.innerHTML = gameHtml;
    var gameBlock = document.querySelector(".game");
    var minBlock = document.querySelector(".time__min");
    var secBlock = document.querySelector(".time__sec");
    var clickBtnChangeDifficult = function () {
        var buttonDifficulty = document.querySelector(".button__difficulty");
        buttonDifficulty === null || buttonDifficulty === void 0 ? void 0 : buttonDifficulty.addEventListener("click", function () {
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DIFFICULTY_PAGE);
        });
    };
    var clickBtnStartGame = function (gameBlock) {
        var btnStartGame = document.querySelector(".button__start-game");
        btnStartGame === null || btnStartGame === void 0 ? void 0 : btnStartGame.addEventListener("click", function () {
            renderGameFieldOpenCards(gameBlock);
            setTimeout(renderGameFieldClosedCards, 5000, gameBlock);
            setTimeout(function () {
                gameBlock.classList.remove("game__disabled");
            }, 5000);
            setTimeout(function () {
                btnStartGame === null || btnStartGame === void 0 ? void 0 : btnStartGame.classList.add("disabled");
                btnStartGame.disabled = true;
            }, 500);
            timerId = setInterval(timer, 1000, minBlock, secBlock);
        });
    };
    var cardsOpenArr = [];
    var cardsOpenArrSrc = [];
    var tryCounter = 0;
    var openCardCounter = 0;
    var clickCard = function () {
        var cardBlock = document.querySelector(".game");
        var counter = 0;
        cardBlock === null || cardBlock === void 0 ? void 0 : cardBlock.addEventListener("click", function (event) {
            var target = event.target;
            var gameCard = target.closest(".game__card");
            var cardClose = gameCard === null || gameCard === void 0 ? void 0 : gameCard.querySelector(".card__shirt");
            var cardOpen = gameCard === null || gameCard === void 0 ? void 0 : gameCard.querySelector(".card__open");
            var cardsSrc = cardOpen === null || cardOpen === void 0 ? void 0 : cardOpen.getAttribute("src");
            cardsOpenArr.push(gameCard);
            cardsOpenArrSrc.push(cardsSrc);
            if (target.classList.contains("card__shirt")) {
                cardClose === null || cardClose === void 0 ? void 0 : cardClose.classList.add("card__shirt_rotate");
                cardOpen === null || cardOpen === void 0 ? void 0 : cardOpen.classList.add("card__open_rotate");
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
                        clearInterval(timerId);
                        window.application.time = "".concat(minBlock === null || minBlock === void 0 ? void 0 : minBlock.textContent, ":").concat(secBlock === null || secBlock === void 0 ? void 0 : secBlock.textContent);
                        window.application.status = "win";
                        setTimeout(renderGameFieldOpenCards, 700, gameBlock);
                        setTimeout(function () {
                            (0,_index__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes__WEBPACK_IMPORTED_MODULE_0__.FINAL_PAGE);
                        }, 1000);
                    }
                }
                else {
                    counter = 0;
                    tryCounter += 1;
                    setTimeout(function () {
                        cardsOpenArr.forEach(function (card) {
                            var _a, _b;
                            (_a = card
                                .querySelector(".card__shirt")) === null || _a === void 0 ? void 0 : _a.classList.remove("card__shirt_rotate");
                            (_b = card
                                .querySelector(".card__open")) === null || _b === void 0 ? void 0 : _b.classList.remove("card__open_rotate");
                        });
                    }, 600);
                    setTimeout(function () {
                        cardsOpenArr.splice(0, 2);
                        cardsOpenArrSrc.splice(0, 2);
                    }, 700);
                    if (tryCounter === 3) {
                        clearInterval(timerId);
                        window.application.time = "".concat(minBlock === null || minBlock === void 0 ? void 0 : minBlock.textContent, ":").concat(secBlock === null || secBlock === void 0 ? void 0 : secBlock.textContent);
                        window.application.status = "lost";
                        setTimeout(renderGameFieldOpenCards, 700, gameBlock);
                        setTimeout(function () {
                            (0,_index__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes__WEBPACK_IMPORTED_MODULE_0__.FINAL_PAGE);
                        }, 1000);
                    }
                }
            }
        });
    };
    var qtyCard = 0;
    if (difficultValue === "1")
        qtyCard = 6;
    if (difficultValue === "2")
        qtyCard = 12;
    if (difficultValue === "3")
        qtyCard = 18;
    window.application.newCards = generatedCards(qtyCard);
    renderGameFieldClosedCards(gameBlock);
    gameBlock === null || gameBlock === void 0 ? void 0 : gameBlock.classList.add("game__difficult_".concat(difficultValue));
    clickBtnStartGame(gameBlock);
    clickBtnChangeDifficult();
    clickCard();
};
var idTimer;
idTimer = window.setInterval(function () {
    console.log('gg');
}, 1000);


/***/ }),

/***/ "./src/js/helpFunctions.ts":
/*!*********************************!*\
  !*** ./src/js/helpFunctions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomInteger: () => (/* binding */ randomInteger),
/* harmony export */   shuffle: () => (/* binding */ shuffle)
/* harmony export */ });
var randomInteger = function (min, max) {
    var rand = min + Math.random() * (max - min);
    return Math.floor(rand);
};
var shuffle = function (arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
};


/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToPage: () => (/* binding */ goToPage)
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/js/routes.ts");
/* harmony import */ var _components_difficulty_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/difficulty-page__component */ "./src/js/components/difficulty-page__component.ts");
/* harmony import */ var _components_game_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-page__component */ "./src/js/components/game-page__component.ts");
/* harmony import */ var _components_final_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/final-page__component */ "./src/js/components/final-page__component.ts");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_null_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/null.css */ "./src/css/null.css");






var appEl = document.querySelector(".app");
window.application = {
    level: "",
    newCards: [],
    time: "00.00",
    status: "",
};
var goToPage = function (newPage, data) {
    if (newPage === _routes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DIFFICULTY_PAGE) {
        (0,_components_difficulty_page_component__WEBPACK_IMPORTED_MODULE_1__.renderChangeDifficultyPage)(appEl);
    }
    if (newPage === _routes__WEBPACK_IMPORTED_MODULE_0__.GAME_PAGE) {
        (0,_components_game_page_component__WEBPACK_IMPORTED_MODULE_2__.renderGamePage)(appEl, data);
    }
    if (newPage === _routes__WEBPACK_IMPORTED_MODULE_0__.FINAL_PAGE) {
        (0,_components_final_page_component__WEBPACK_IMPORTED_MODULE_3__.renderFinalPage)(appEl);
    }
};
goToPage(_routes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DIFFICULTY_PAGE);


/***/ }),

/***/ "./src/js/routes.ts":
/*!**************************!*\
  !*** ./src/js/routes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHANGE_DIFFICULTY_PAGE: () => (/* binding */ CHANGE_DIFFICULTY_PAGE),
/* harmony export */   FINAL_PAGE: () => (/* binding */ FINAL_PAGE),
/* harmony export */   GAME_PAGE: () => (/* binding */ GAME_PAGE),
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   pathToCard: () => (/* binding */ pathToCard)
/* harmony export */ });
var CHANGE_DIFFICULTY_PAGE = "change_difficulty";
var GAME_PAGE = "game";
var FINAL_PAGE = "final";
var pathToCard = "./static/img";
var cards = [
    "туз пики.png",
    "король пики.png",
    "валет пики.png",
    "дама пики.png",
    "10 пики.png",
    "9 пики.png",
    "8 пики.png",
    "7 пики.png",
    "6 пики.png",
    "туз черви.png",
    "король черви.png",
    "валет черви.png",
    "дама черви.png",
    "10 черви.png",
    "9 черви.png",
    "8 черви.png",
    "7 черви.png",
    "6 черви.png",
    "туз крести.png",
    "король крести.png",
    "валет крести.png",
    "дама крести.png",
    "10 крести.png",
    "9 крести.png",
    "8 крести.png",
    "7 крести.png",
    "6 крести.png",
    "туз бубны.png",
    "король бубны.png",
    "валет бубны.png",
    "дама бубны.png",
    "10 бубны.png",
    "9 бубны.png",
    "8 бубны.png",
    "7 бубны.png",
    "6 бубны.png",
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map