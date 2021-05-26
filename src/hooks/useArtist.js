import { useState, useEffect } from 'react';
import { fetchArtists } from '../services/api-utils';

const useArtist = () => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('artist');
  const [totalPages, setTotalPages] = useState();

  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const handleLimitChange = ({ target }) => {
    setLimit(target.value);
  };

  const handlePageChange = ({ target }) => {
    if(target.value === 'next') {
      return setCurrentPage(currentPage + 1);
    } else {
      return setCurrentPage(currentPage - 1);
    }
  };

  const handleArtistsFetch = () => {
    const { artistArray, count } = 
    fetchArtists(currentPage, query, limit, filter);
    handleTotalPages(count, limit);
    setArtists(artistArray);
  };

  const handleTotalPages = (count, limit) => {
    setTotalPages(Math.ceil(count / limit));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleArtistsFetch();
  };

  useEffect(() => {
    setLoading(true);
    handleArtistsFetch();
    setLoading(false);
  }, []);

  return {
    loading,
    artists,
    query,
    limit,
    currentPage,
    totalPages,
    handleSubmit,
    handleFilterChange,
    handleQueryChange,
    handleLimitChange,
    handlePageChange,
    handleTotalPages
  };
};

export default useArtist;
