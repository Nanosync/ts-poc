import App = require("./index");

declare module "./index" {
  export interface ScreenSize {
    height: number;
    width: number;
  }
}
