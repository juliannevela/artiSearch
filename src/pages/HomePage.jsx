import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import SearchControls from '../components/home/SearchControls';
import style from '../components/styles/main.css';
import useArtist from '../hooks/useArtist';

function HomePage() {
  // Home page artist list & search bar/controls
  const artistUtils = useArtist();
  return (
    <main className={style.mainContainer}>
      <aside className={style.searchControls}>
        <SearchControls { ...artistUtils } />
      </aside>
      <section className={style.artistList}>
        <ArtistList 
          artistArray={artistUtils.artistArray} 
          loading={artistUtils.loading} 
        />
      </section>
    </main>
  );
}

export default HomePage;
