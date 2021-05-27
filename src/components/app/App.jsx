import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ArtistPage from '../../pages/ArtistPage';
import AlbumPage from '../../pages/AlbumPage';
import SongLyrics from '../../pages/SongLyrics';
import Header from './Header';
import '../styles/main.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/artists/:name/:id" component={ArtistPage} />
        <Route exact path="/albums/:name/:id" component={AlbumPage} />
        <Route exact path="/lyrics/:artist/:title" component={SongLyrics} />
      </Switch>
    </Router>
  );
}
