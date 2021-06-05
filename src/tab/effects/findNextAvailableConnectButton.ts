import { createEffect } from "effector";
import { LinkedInSelector } from "../enums/LinkedInSelector";

export const findNextAvailableConnectButton = createEffect((selector: LinkedInSelector) => {
  window.scrollTo(0, document.body.scrollHeight);
  return document.querySelector<HTMLButtonElement>(selector);
});
