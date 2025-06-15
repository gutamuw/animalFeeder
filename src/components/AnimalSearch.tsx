import { useState, type FormEvent } from "react";
import "./scss/AnimalSearch.scss";
import { FaSearch } from "react-icons/fa";

interface AnimalSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const AnimalSearch = ({ searchTerm, setSearchTerm }: AnimalSearchProps) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form action="" className="animal-search" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Sök efter djur..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search-button" tabIndex={-1}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default AnimalSearch;
