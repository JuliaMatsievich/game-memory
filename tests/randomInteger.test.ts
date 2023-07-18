import { randomInteger } from "../src/js/components/game-page__component";
const { it, expect } = require("@jest/globals");

it("should get number between min and max number", () => {
   const min = 1;
   const max = 10;

   const result = randomInteger(min, max);

   expect(result).toBeGreaterThanOrEqual(min);
   expect(result).toBeLessThanOrEqual(max);
});
