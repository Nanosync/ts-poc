import App = require("./index");

declare module "./index" {
  declare namespace Chat {
    interface BaseMessage {
      id: string;
      message?: string;
    }

    export interface ColorMessage extends BaseMessage {
      type: "TEXT";
      color: string;
    }
  }
  export { Chat };
}
