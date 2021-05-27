import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../app/Loading';
import style from '../styles/artists.css';

function ArtistList({ artistArray, loading }) {
  return loading ? (
    <Loading />
  ) : (
    <ul>
      {artistArray.map((artist) => (
        <li className={style.artistCard} key={artist.id}>
          <p>Name: ${artist.name}</p>
          <p>
            Genres: {artist.tags ? artist.tags : 'Does not ascribe to labels.'}
          </p>
        </li>
      ))}
    </ul>
  );
}

ArtistList.propTypes = {
  artistArray: PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.shape({
      count: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
  loading: PropTypes.bool.isRequired,
};

export default ArtistList;
