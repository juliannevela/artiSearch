import { useState } from 'react';
import { fetchArtists } from '../services/api-utils';

const useArtist = () => {
  const [loading, setLoading] = useState(false);
  const [artistArray, setArtistArray] = useState([]);
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

  const handleArtistsFetch = async () => {
    const { artistResults, count } = 
    await fetchArtists(currentPage, query, limit, filter);
    handleTotalPages(count, limit);
    setArtistArray(artistResults);
    console.log(artistResults, 'hook');
  };
  console.log(artistArray, 'hi');
  const handleTotalPages = (count, limit) => {
    setTotalPages(Math.ceil(count / limit));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleArtistsFetch();
    setLoading(false);
  };


  const artistUtils = {
    loading,
    artistArray,
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

  return artistUtils;
};

export default useArtist;
