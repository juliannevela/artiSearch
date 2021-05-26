import React from 'react';
import style from '../styles/artists.css';

function ArtistList() {
  const artists = ['this', 'that', 'them', 'live'];
  return (
    <section className="artistList">
      <ul>
        {artists.map((artist) => (
          <li className={style.artistCard} key={artist.id}>
            <p>Artist Name</p>
            <p>Tags</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ArtistList;
