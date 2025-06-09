import type { IAnimal } from "../models/IAnimal";

export const getAnimals = async (): Promise<IAnimal[]> => {
  try {
    const response = await fetch(
      "https://animals.azurewebsites.net/api/animals"
    );
    const data: IAnimal[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    return [];
  }
};
