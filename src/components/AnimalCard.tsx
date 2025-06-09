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
  let warning = "";
  let warningClass = "";
  if (hours >= 5) {
    warning = "Mata genast!";
    warningClass = "urgent";
  } else if (hours >= 3) {
    warning = "Varning: Behöver matas snart!";
    warningClass = "soon";
  }

  return (
    <li className="animal-item">
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="animal-img"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        }}
      />
      <div className="animal-content">
        <h2>{animal.name}</h2>
        <p>
          <strong>Födelseår:</strong> {animal.yearOfBirth}
        </p>
        <p>
          <strong>Beskrivning:</strong> {animal.shortDescription}
        </p>
        <p className={`animal-status ${animal.isFed ? "Fed" : "Hungrig"}`}>
          {animal.isFed ? "Mätt" : "Hungrig"}
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
        <Link
          to={`/animals/${animal.id}`}
          className="animal-link"
          title={`View details for ${animal.name}`}
        >
          Visa detaljer för {animal.name}
        </Link>
      </div>
    </li>
  );
};

export default AnimalCard;
