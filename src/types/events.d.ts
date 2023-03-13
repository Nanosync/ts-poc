import App = require("./index");

declare module "./index" {
  declare namespace Events {
    export interface NotificationEvent {
      id: string;
      data?: object;
    }
  }

  export { Events };
}
