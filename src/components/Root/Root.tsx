import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';
import App from '../../App';
import { HomePage } from '../../pages/HomePage';
import { FavoriteShowsPage } from '../../pages/FavoriteShowsPage';
import { CurrentShowPage } from '../../pages/CurrentShowPage';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<HomePage />} />
        <Route path='favorite-shows' element={<FavoriteShowsPage />} />
        <Route path='show'>
          <Route path=':showId' element={<CurrentShowPage />} />
        </Route>
        <Route path='home' element={<Navigate to=".." replace />} />
        <Route path='*' element="Not Found" />
      </Route>
    </Routes>
  </Router>
);
