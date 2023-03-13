import App = require("./index");

declare module "./index" {
  declare namespace Game {
    export interface Room {
      id: string;
    }
  }
  export { Call };
}
