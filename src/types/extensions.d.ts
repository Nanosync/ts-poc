import App = require("./index");

declare module "./index" {
  export interface Test {
    id: string;
  }
}
