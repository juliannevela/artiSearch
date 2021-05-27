import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/app/Loading';
import { fetchLyrics } from '../services/api-utils';

const SongLyrics = () => {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);
  const { artist, title } = useParams();

  useEffect(() => {
    fetchLyrics(artist, title)
      .then((results) => setLyrics(results))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <main>
      <p className="lyrics">{lyrics}</p>
    </main>
  );
};

export default SongLyrics;
