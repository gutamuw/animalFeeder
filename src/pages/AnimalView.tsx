import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { useParams } from "react-router";
import { ActionTypes } from "../reducers/animalReducer";
import "./scss/AnimalView.scss";
import Button from "../components/Button";

const AnimalView = () => {
  const { animals, dispatch } = useContext(AnimalsContext);
  const { id } = useParams();

  if (!animals) return <div>Loading...</div>;

  if (id) {
    const animal = animals.find((animal) => animal.id === +id);
    if (animal) {
      return (
        <div className="wrapper">
          <div className="animal-view-header">
            <h1>{animal.name}</h1>
            <p>Här kan du se detaljer om {animal.name}.</p>
          </div>
          <div className="animal-view two-column">
            <div className="animal-view-img-col">
              <img src={animal.imageUrl} className="animal-view-img" />
            </div>
            <div className="animal-view-content-col" tabIndex={0}>
              <div className="animal-header-row">
                <h1>{animal.name}</h1>
                <em>{animal.latinName}</em>
              </div>
              <div className="animal-meta-row">
                <span className="animal-age">
                  Ålder: {new Date().getFullYear() - animal.yearOfBirth} år
                </span>
                <span className="animal-medicine">
                  <strong style={{ marginRight: 6 }}>Behöver medicin:</strong>{" "}
                  {animal.medicine}
                </span>
              </div>
              <div className="animal-status-row">
                <span
                  className={
                    "animal-status " + (animal.isFed ? "Matad" : "Hungrig")
                  }
                >
                  Status: {animal.isFed ? "Matad" : "Hungrig"}
                </span>
                <span>
                  <strong>Senast matad:</strong>{" "}
                  {new Date(animal.lastFed).toLocaleString()}
                </span>
              </div>
              <div className="animal-description">
                <p className="animal-long">{animal.longDescription}</p>
              </div>

              <Button
                onClick={() =>
                  dispatch({
                    type: ActionTypes.FED,
                    payload: JSON.stringify(animal.id),
                  })
                }
                disabled={animal.isFed}
                variant="primary"
              >
                Mata {animal.name}
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
  return <div>Djuret kunde inte hittas.</div>;
};

export default AnimalView;
function hoursSince(lastFed: any) {
  throw new Error("Function not implemented.");
}
