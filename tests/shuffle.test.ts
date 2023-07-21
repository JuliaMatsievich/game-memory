import { shuffle } from "../src/js/helpFunctions";

it('should return Array same length,', () => {
	let array: Array<string> = ['a', 'b', 'c', 'd', 'e'];

	const result = shuffle(array);

	expect(result.length).toBe(array.length)
})