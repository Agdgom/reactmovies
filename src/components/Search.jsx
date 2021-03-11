import React, {useState} from "react";

const Search = (props) => {
  const {searchMovies = Function.prototype} = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };
  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          className="validate"
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />

        <button
          onClick={() =>
            searchMovies(search, type)
          }
          className="btn btn-search red accent-1"
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            class="with-gap red accent-1"
            name="type"
            type="radio"
            data-type="all"
            checked={type === 'all'}
            onChange={handleFilter}
            
          />
          <span>All</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            checked={type === 'movie'}
            onChange={handleFilter}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            data-type="series"
            checked={type === 'series'}
            onChange={handleFilter}
          />
          <span>Series only</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            data-type="game"
            checked={type === 'game'}
            onChange={handleFilter}
          />
          <span>Game only</span>
        </label>
      </div>
    </div>
  );
}


export default Search;