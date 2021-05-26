import React from 'react';
import style from '../components/styles/main.css';

function HomePage() {
  // Home page artist list & search bar/controls
  return (
    <main className={style.mainContainer}>
      <aside className={style.searchControls}>Search Controls/Bar</aside>
      <section className={style.artistList}>Artist List, Component</section>
    </main>
  );
}

export default HomePage;
