import { hoursSinceFed } from "../utils/hoursSinceFed";
import type { IAnimal } from "../models/IAnimal";

interface AnimalCardProps {
  animal: IAnimal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const hours = hoursSinceFed(animal.lastFed);
  let warning = "";
  if (hours >= 5) {
    warning = "Mata genast!";
  } else if (hours >= 3) {
    warning = "Varning: Behöver matas snart!";
  }

  return (
    <li key={animal.id} className="animal-item">
      <h2>{animal.name}</h2>
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="animal-img"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Fallback image
        }}
      />
      <p>
        <strong>Year of Birth:</strong> {animal.yearOfBirth}
      </p>
      <p>
        <strong>Short Description:</strong> {animal.shortDescription}
      </p>
      <p>
        <strong>Status:</strong> {animal.isFed ? "Mätt" : "Hungrig"}
      </p>
      <p>
        <strong>Last Fed:</strong> {animal.lastFed}
      </p>
      {warning && (
        <p className={`animal-warning ${hours >= 5 ? "urgent" : "soon"}`}>
          {warning}
        </p>
      )}
    </li>
  );
};

export default AnimalCard;
