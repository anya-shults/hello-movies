import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes
} from 'react-router-dom';
import App from '../../App';
import { HomePage } from '../../pages/HomePage';
import { LikesPage } from '../../pages/LikesPage';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<HomePage />} />
        <Route path='likes' element={<LikesPage />} />
        <Route path='home' element={<Navigate to=".." replace />} />
        <Route path='*' element="Not Found" />
      </Route>
    </Routes>
  </Router>
);
