import { hoursSinceFed } from "../utils/hoursSinceFed";
import type { IAnimal } from "../models/IAnimal";
import { Link } from "react-router";
import "./scss/AnimalCard.scss";
import { FaUtensils } from "react-icons/fa";

interface AnimalCardProps {
  animal: IAnimal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const hours = hoursSinceFed(animal.lastFed);
  const isFed = hours < 4;
  const warning = hours >= 4 ? "Mata genast!" : hours >= 3 ? "Mata snart!" : "";
  const warningClass = hours >= 4 ? "urgent" : hours >= 3 ? "soon" : "";

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
            <FaUtensils style={{ marginRight: "0.4em" }} />
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
