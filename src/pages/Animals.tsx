import { useContext, useState } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import "./scss/Animals.scss";
import AnimalCard from "../components/AnimalCard";
import AnimalSearch from "../components/AnimalSearch";

const Animals = () => {
  const { animals } = useContext(AnimalsContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (!animals) return;

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <section className="animals-hero">
        <h1>Alla våra djur</h1>
        <AnimalSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>
      <ul className="animals-list">
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </ul>
    </div>
  );
};

export default Animals;
