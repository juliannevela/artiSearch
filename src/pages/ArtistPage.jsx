/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from '../components/app/Loading';
import { fetchReleases } from '../services/api-utils';
import style from '../components/styles/album.css';

function Artist() {
  const { id, name } = useParams();
  const [releaseList, setReleaseList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReleases(id)
      .then(({ releaseArray }) => setReleaseList(releaseArray))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  return (
    <main className={style.mainContainer}>
      <section>{name} Albums</section>
      <section>
        <ul className={style.albums}>
          {releaseList.map((release) => (
            <Link to={`/album/${release.albumId}`} key={`${release.albumId}`}>
              <li className={style.albumCard}>
                <img
                  src={
                    release.coverArt
                      ? `http://coverartarchive.org/release/${release.albumId}/front`
                      : 'http://placekitten.com/200/200'
                  }
                  alt="cover-art"
                  height="200px"
                />
                <p>Album Title: {release.albumTitle}</p>
                <p>Release Date: {release.releaseDate}</p>
                <p>Country: {release.country}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Artist;
