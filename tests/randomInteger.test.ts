import { randomInteger } from "../src/js/helpFunctions";

it("should get number between min and max number", () => {
   const min = 1;
   const max = 10;

   const result = randomInteger(min, max);

   expect(result).toBeGreaterThanOrEqual(min);
   expect(result).toBeLessThanOrEqual(max);
});
