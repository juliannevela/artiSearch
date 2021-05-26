import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import ArtistPage from '../../containers/ArtistPage';
import AlbumPage from '../../containers/AlbumPage';
import SongLyrics from '../../containers/SongLyrics';
import Header from './Header';
import '../styles/main.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/artists/:id" component={ArtistPage} />
        <Route exact path="/album/:id" component={AlbumPage} />
        <Route exact path="/lyrics/:artist/:title" component={SongLyrics} />
      </Switch>
    </Router>
  );
}
