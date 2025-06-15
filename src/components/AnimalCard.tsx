import { hoursSinceFed } from "../utils/hoursSinceFed";
import type { IAnimal } from "../models/IAnimal";
import { Link } from "react-router";
import "./scss/AnimalCard.scss";
import { FaRegCalendarAlt } from "react-icons/fa";

interface AnimalCardProps {
  animal: IAnimal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const hours = hoursSinceFed(animal.lastFed);
  const isFed = hours < 5;
  let warning = "";
  let warningClass = "";
  if (hours >= 5) {
    warning = "Mata genast!";
    warningClass = "urgent";
  } else if (hours >= 3) {
    warning = "Mata snart!";
    warningClass = "soon";
  }

  return (
    <Link to={`/animals/${animal.id}`} className="animal-link">
      <div className="animal-item">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="animal-img"
          onError={(e) => {
            e.currentTarget.src =
              "https://skuss.se/wp-content/uploads/2019/04/Bild-saknas-9.jpg";
          }}
        />
        <div className="animal-content">
          <h2>{animal.name}</h2>
          <p>
            <strong>Beskrivning:</strong> {animal.shortDescription}
          </p>
          <p className={`animal-status ${isFed ? "fed" : "hungry"}`}>
            {isFed ? "Mätt" : "Hungrig"}
          </p>
          <p className="animal-fed">
            <FaRegCalendarAlt style={{ marginRight: "0.4em" }} />
            {new Date(animal.lastFed).toLocaleString("sv-SE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
          {warning && (
            <p className={`animal-warning ${warningClass}`}>{warning}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AnimalCard;
