import type { IAnimal } from "../models/IAnimal";

export enum ActionTypes {
  LOADED,
  FED,
}

export type Action = {
  type: ActionTypes;
  payload: string;
};

export const AnimalReducer = (
  animals: IAnimal[],
  action: Action
): IAnimal[] => {
  switch (action.type) {
    case ActionTypes.LOADED:
      return JSON.parse(action.payload) as IAnimal[];

    case ActionTypes.FED:
      return animals.map((animal) =>
        animal.id === +action.payload
          ? { ...animal, lastFed: new Date().toISOString() }
          : animal
      );

    default:
      return animals;
  }
};
