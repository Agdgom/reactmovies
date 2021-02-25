import React from "react";

export default class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () =>{
        this.props.searchMovies(this.state.search, this.state.type);
        
    });
  };
  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            type="search"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
            className="btn btn-search"
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === 'all'}
              onChange={this.handleFilter}
              
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === 'movie'}
              onChange={this.handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === 'series'}
              onChange={this.handleFilter}
            />
            <span>Series only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="game"
              checked={this.state.type === 'game'}
              onChange={this.handleFilter}
            />
            <span>Game only</span>
          </label>
        </div>
      </div>
    );
  }
}
