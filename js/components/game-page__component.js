export const renderGamePage = (appEl,difficultValue) => {
	
	if(difficultValue === '1') {

		const gameDifficulty1Html = `
		<div>Это первый уровень сложности</div>
		`

		appEl.innerHTML = gameDifficulty1Html;
	}


	if(difficultValue === '2') {

		const gameDifficulty2Html = `
		<div>Это второй уровень сложности</div>
		`

		appEl.innerHTML = gameDifficulty2Html;
	}


	if(difficultValue === '3') {

		const gameDifficulty3Html = `
		<div>Это третий уровень сложности</div>
		`

		appEl.innerHTML = gameDifficulty3Html;
	}
	
}