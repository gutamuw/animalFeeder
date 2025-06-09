import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { hoursSinceFed } from "../utils/hoursSinceFed";
import "./scss/Animals.scss";
import AnimalCard from "../components/AnimalCard";

const Animals = () => {
  const { animals } = useContext(AnimalsContext);

  if (!animals) return;

  return (
    <div className="wrapper">
      <h1>Djur</h1>
      <ul className="animals-list">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </ul>
    </div>
  );
};

export default Animals;
