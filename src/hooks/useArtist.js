import { useState, useEffect } from 'react';
import { fetchArtists } from '../services/api-utils';

const useArtist = () => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('artist');

  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const handleLimitChange = ({ target }) => {
    setLimit(target.value);
  };
  const handleCurrentPageChange = ({ target }) => {
    setCurrentPage(target.value);
  };

  const handleArtistsFetch = () => {
    const artists = fetchArtists(currentPage, query, limit, filter);
    setArtists(artists);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setLoading(true);

    setLoading(false);
  }, [currentPage]);

  return {
    loading,
    artists,
    query,
    limit,
    currentPage,
    handleQueryChange,
    handleLimitChange,
    handleCurrentPageChange,
  };
};

export default useArtist;
