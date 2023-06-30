import { goToPage } from "../index.js";

export const renderChangeDifficultyPage = (appEl) => {
	const changeDifficultyHtml = `
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
		<button class="button popup__button">Старт</button>
	</div>

</div>
	`
appEl.innerHTML = changeDifficultyHtml;


const difficultyContainer = document.querySelector('.difficulty__container');
difficultyContainer.addEventListener('click', (event) => {
	const target = event.target;
	const difficultInput = target.querySelector('input');
	const difficultBlock = target.closest('.difficulty__block');

	difficultBlock.classList.toggle('difficulty__block_checked');
	difficultInput.checked = !difficultInput.checked;
	console.log(difficultInput.checked);

})


}

