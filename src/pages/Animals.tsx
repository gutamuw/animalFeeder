import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";

const Animals = () => {
  const { animals } = useContext(AnimalsContext);

  if (!animals) return;

  return (
    <div>
      <h1>Animals</h1>
      <p>List of animals will be displayed here.</p>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Animals;
