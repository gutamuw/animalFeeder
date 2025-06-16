import { useContext, useState } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import "./scss/Animals.scss";
import AnimalCard from "../components/AnimalCard";
import AnimalSearch from "../components/AnimalSearch";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Alla våra djur
        </motion.h1>
        <AnimalSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>
      <ul className="animals-list">
        {filteredAnimals.map((animal, i) => (
          <motion.li
            key={animal.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            style={{ listStyle: "none" }}
          >
            <AnimalCard animal={animal} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Animals;
