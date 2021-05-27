/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/search.css';

const SearchControls = ({
  query,
  currentPage,
  handleQueryChange,
  handleFilterChange,
  handleLimitChange,
  handlePageChange,
  handleSubmit,
}) => {
  return (
    <>
      <section className={style.search}>
        {/* search input
                    button
                    select filter (artists, albums, songs)
                    pagination controls
                */}

        <form onSubmit={handleSubmit}>
          <label htmlFor="search-bar"></label>
          <p>Search by name</p>
          <input
            type="search"
            aria-label="search-field"
            className="searchField"
            id="search-bar"
            value={query}
            onChange={handleQueryChange}
          />
          <p>Search Filter</p>
          <select
            name="filterOptions"
            id="filter-options"
            onChange={handleFilterChange}
          >
            <option value="artist">Artists</option>
            <option value="releases">Albums</option>
            <option value="title">Songs</option>
          </select>
          <p>Results per page: </p>
          <select name="perPage" id="per-page" onChange={handleLimitChange}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <button type="submit">Search</button>
        </form>
      </section>
      <section className={style.pageNavigation}>
        <p>Page Navigation</p>
        <button value="previous" onClick={handlePageChange}>
          Prev
        </button>
        <span className="pageDisplay">{currentPage}</span>
        <button value="next" onClick={handlePageChange}>
          Next
        </button>
      </section>
    </>
  );
};

SearchControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleLimitChange: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchControls;
