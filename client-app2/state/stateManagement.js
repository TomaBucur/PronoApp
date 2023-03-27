import { atom } from "jotai";

const burgerMenu = atom(false);

//  CREATE TOURNAMENT STATE
const selectedChampionship = atom({});
const isPublic = atom(false);
const tournamentName = atom("Tournament Name");
const isPaid = atom(false);
const entryPrice = atom(0);
const pronosticFrquency = atom("weekly");
const termsChecked = atom(false);
const over18 = atom(false);

/// USER STATE
const loggedUser = atom({});

export const navigationState = {
  burgerMenu,
};

export const createTournamentState = {
  selectedChampionship,
  isPublic,
  tournamentName,
  isPaid,
  entryPrice,
  pronosticFrquency,
  termsChecked,
  over18,
};

export const userState = {
  loggedUser,
};
