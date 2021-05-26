import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import ArtistPage from '../../containers/ArtistPage';
import AlbumPage from '../../containers/AlbumPage';
import SongLyrics from '../../containers/SongLyrics';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/artist/:id" component={ArtistPage} />
        <Route path="/album/:id" component={AlbumPage} />
        <Route path="/lyrics/:artist/:title" component={SongLyrics} />
      </Switch>
    </Router>
  );
}
