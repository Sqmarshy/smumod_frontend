import '../styles/Searchbar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Course code, names and descriptions"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;