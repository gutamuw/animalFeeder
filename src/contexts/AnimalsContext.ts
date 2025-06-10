import { createContext } from "react";
import type { IAnimal } from "../models/IAnimal";
import type { Action } from "../reducers/animalReducer";

interface IAnimalsContext {
  animals: IAnimal[];
  dispatch: (action: Action) => void;
}

export const AnimalsContext = createContext<IAnimalsContext>({
  animals: [],
  dispatch: () => {},
});
