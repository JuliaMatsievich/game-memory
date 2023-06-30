export const renderChangeDifficultyPage = (appEl) => {
	const changeDifficultyHtml = `
	<div class="popup">
	<div class="popup__container">
		<div class="popup__title">Выбери сложность</div>
		<div class="popup__content popup__content-difficulty">
			<div class="difficulty__container">

				<div class="difficulty__block">
					<input id="difficult-1" type="radio" name="radio" value="1">
					<label for="difficult-1">1</label>
				</div>
				 
				<div class="difficulty__block">
					<input id="difficult-2" type="radio" name="radio" value="2">
					<label for="difficult-2">2</label>
				</div>
				 
				<div class="difficulty__block">
					<input id="difficult-3" type="radio" name="radio" value="3">
					<label for="difficult-3">3</label>
				</div>

			</div>
		</div>
		<button class="button popup__button">Старт</button>
	</div>

</div>
	`
	appEl.innerHTML = changeDifficultyHtml;

const difficultContainer = document.querySelector('.difficulty__container');

difficultContainer.addEventListener('click', (event) => {
	const target = event.target;

	

	console.log(target);
})

}

