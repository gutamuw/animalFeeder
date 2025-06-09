import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { useParams } from "react-router";

const AnimalView = () => {
  const { animals } = useContext(AnimalsContext);
  const { id } = useParams();

  if (!animals) return <div>Loading...</div>;

  if (id) {
    const animalsToShow = animals.find((animal) => animal.id === +id);
    if (animalsToShow) {
      return (
        <div>
          <h1>{animalsToShow.name}</h1>
          <p>{animalsToShow.latinName}</p>
          <img src={animalsToShow.imageUrl} alt={animalsToShow.name} />
        </div>
      );
    }
  }
  return (
    <div>
      <h1>Animal View</h1>
      <p>This is the animal view page.</p>
    </div>
  );
};

export default AnimalView;
