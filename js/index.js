import { CHANGE_DIFFICULTY_PAGE } from "./routes.js";
import { renderChangeDifficultyPage } from "./components/difficulty-page__component.js";

const appEl = document.querySelector('.app');

export const goToPage = (newPage) => {
	if (newPage = CHANGE_DIFFICULTY_PAGE) {
		renderChangeDifficultyPage(appEl)
	}
}

goToPage(CHANGE_DIFFICULTY_PAGE);
