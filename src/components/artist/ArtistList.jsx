import React from 'react';
import Loading from '../app/Loading';
import style from '../styles/artists.css';

function ArtistList({ artistArray, loading }) {
  
  console.log(artistArray, 'list');
  return loading ? (<Loading />) : (
    <ul>
      {artistArray.map((artist) => (
        <li className={style.artistCard} key={artist.id}>
          <p>Artist Name</p>
          <p>Tags</p>
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;
