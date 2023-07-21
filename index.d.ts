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

}

