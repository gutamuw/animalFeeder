import { useContext, useState } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { Link, useParams } from "react-router";
import { ActionTypes } from "../reducers/animalReducer";
import "./scss/AnimalView.scss";
import Button from "../components/Button";
import { hoursSinceFed } from "../utils/hoursSinceFed";
import Router from "../routes/Routes";
import { AnimatePresence, motion } from "framer-motion";

const AnimalView = () => {
  const { animals, dispatch } = useContext(AnimalsContext);
  const { id } = useParams();
  const [showLoader, setShowLoader] = useState(false);

  if (!animals) return <div>Loading...</div>;

  const animal = animals.find((animal) => animal.id === +id!);
  if (!animal) return <div>Animal not found</div>;

  const hours = hoursSinceFed(animal.lastFed);
  const isFed = hours < 5;

  const handleFeed = () => {
    dispatch({
      type: ActionTypes.FED,
      payload: JSON.stringify(animal.id),
    });
    setShowLoader(true);
    setTimeout(() => {
      Router.navigate("/animals");
      window.scrollTo(0, 0);
    }, 3000);
  };

  return (
    <div className="wrapper">
      <div className="animal-view-header">
        <div className="inverted-radius-notch"></div>
        <div className="inverted-radius-notch-2"></div>
        <h1>{animal.name}</h1>
        <p>Här kan du se detaljer om {animal.name}.</p>
        <Link to="/animals" className="animal-view-back-link">
          <Button
            variant="secondary"
            iconPosition="before"
            iconDirection="backward"
          >
            Gå tillbaka
          </Button>
        </Link>
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
            <span className={"animal-status " + (isFed ? "Matad" : "Hungrig")}>
              Status: {isFed ? "Matad" : "Hungrig"}
            </span>
            <span>
              <strong>Senast matad:</strong>{" "}
              {new Date(animal.lastFed).toLocaleString()}
            </span>
          </div>
          <div className="animal-description">
            <p className="animal-long">{animal.longDescription}</p>
          </div>

          <Button onClick={handleFeed} disabled={isFed} variant="primary">
            Mata {animal.name}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {showLoader && (
          <div className="animal-popup-overlay">
            <motion.div
              className="animal-popup"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="spinner" />
              <p>Tar dig tillbaka till listvyn...</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimalView;
