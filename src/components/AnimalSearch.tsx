import "./scss/AnimalSearch.scss";
import { FaSearch } from "react-icons/fa";

interface AnimalSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const AnimalSearch = ({ searchTerm, setSearchTerm }: AnimalSearchProps) => {
  return (
    <form action="" className="animal-search">
      <div className="search-input-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Sök efter djur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button" tabIndex={-1}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default AnimalSearch;
