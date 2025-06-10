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
          ? { ...animal, isFed: true, lastFed: new Date().toISOString() }
          : animal
      ); //tack Ymer för tipset om ternary operator

    default:
      return animals;
  }
};
