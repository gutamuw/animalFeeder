import { createContext } from "react";
import type { IAnimal } from "../models/IAnimal";

interface IAnimalsContext {
  animals: IAnimal[];
}

export const AnimalsContext = createContext<IAnimalsContext>({
  animals: [],
});

//may want to add reducer later (dispatch, etc...)
