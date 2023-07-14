export {};

declare global {
  interface Window {
    application: {
		level: string,
		newCards: Array<string>,
		time: string,
		status: string,
	 };
  }
  interface Render {
   gameBlock:Element,
   isOpenCard: Boolean,
   isCloseCard:Boolean,
   newCards:Array<string>
}
}

