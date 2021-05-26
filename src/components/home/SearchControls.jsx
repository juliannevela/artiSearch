/* eslint-disable max-len */
import React from 'react';
import style from '../styles/search.css';

function SearchControls() {
  return (
    <>
      <section className={style.search}>
        {/* search input
                    button
                    select filter (artists, albums, songs)
                    pagination controls
                */}

        <form>
          <label htmlFor="search-bar"></label>
          <p>Search by name</p>
          <input
            type="search"
            aria-label="search-field"
            className="searchField"
            id="search-bar"
          />
          <p>Search Filter</p>
          <select name="filterOptions" id="filter-options">
            <option value="artist">Artists</option>
            <option value="releases">Albums</option>
            <option value="title">Songs</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>
      <section className={style.pageNavigation}>
        <p>Page Navigation</p>
        <button value="previous">Prev</button>
        {/* TODO replace with variables currentPage and totalPages from hook */}
        <span className="pageDisplay">1/X</span>
        <button value="next">Next</button>
      </section>
    </>
  );
}

export default SearchControls;
