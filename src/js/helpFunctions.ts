export const randomInteger = (min: number, max: number): number => {
   let rand = min + Math.random() * (max - min);
   return Math.floor(rand);
};


export const shuffle = (arr: Array<string>): Array<string> => {
   let j, temp;
   for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
   }
   return arr;
};
