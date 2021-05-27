/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Loading from '../components/app/Loading';
import { fetchSongs } from '../services/api-utils';
import style from '../components/styles/album.css';

function AlbumPage() {
  const { name, id } = useParams();
  const [songList, setSongList] = useState([]);
  const [loading, setLoading] = useState(true);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const artist = query.get('artist');
  const coverParse = () => {
    const coverQuery = query.get('cover');
    if (coverQuery === 'true') {
      return true;
    } else {
      return false;
    }
  };
  const cover = coverParse();


  useEffect(() => {
    fetchSongs(id)
      .then(({ recordings }) => setSongList(recordings))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  return (
    <main className={style.mainContainer}>
      <section>{name} Songs
        <img
          src={
            cover
              ? `http://coverartarchive.org/release/${id}/front`
              : 'http://placekitten.com/200/200'
          }
          alt="cover-art"
          height="200px"
        />
      </section>

      <section>
        <ul className={style.songs}>
          {songList.map((song) => (
            <Link
              to={`/lyrics/${artist}/${song.title}`}
              key={`${song.id}`}
            >
              <li className={style.songCard}>

                <p>Song Title: {song.title}</p>
                <p>Release Date: {song['first-release-date']}</p>
                <p>Length: {song.length / 1000}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default AlbumPage;
