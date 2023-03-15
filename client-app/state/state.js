import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const burgerMenu = atom(false);

export const navigationState = {
  burgerMenu,
};
