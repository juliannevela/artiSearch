import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import SearchControls from '../components/home/SearchControls';
import style from '../components/styles/main.css';

function HomePage() {
  // Home page artist list & search bar/controls
  return (
    <main className={style.mainContainer}>
      <aside className={style.searchControls}>
        <SearchControls />
      </aside>
      <section className={style.artistList}>
        <ArtistList />
      </section>
    </main>
  );
}

export default HomePage;
