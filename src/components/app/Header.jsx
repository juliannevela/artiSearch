import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>artiSearch</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/lyrics">Song Lyrics</Link>
      </nav>
    </header>
  );
}

export default Header;
