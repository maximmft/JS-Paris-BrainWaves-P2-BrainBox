import PropTypes from "prop-types";
import "./searchbar.css";

function SearchBar({handleSearch}) {
    
    return (
    <div className="searchBar">
      <input type="text" id="searchBarInput" placeholder="🔍 Search for Quizz Theme" onChange={handleSearch}/>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
