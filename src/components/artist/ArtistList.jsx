import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../app/Loading';
import style from '../styles/artists.css';
import { Link } from 'react-router-dom';

function ArtistList({ artistArray, loading }) {
  return loading ? (
    <Loading />
  ) : (
    <ul>
      {artistArray.map((artist) => (
        <Link to={`/${artist.name}/${artist.artistId}`} key={artist.artistId}>
          <li className={style.artistCard}>
            <p>Name: {artist.name}</p>
            <p>
              Genres:{' '}
              {artist.tags
                ? artist.tags.map((tag) => tag.name)
                : 'Does not ascribe to labels.'}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

ArtistList.propTypes = {
  artistArray: PropTypes.arrayOf(
    PropTypes.shape({
      artistId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          count: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    })
  ),
  loading: PropTypes.bool.isRequired,
};

export default ArtistList;
