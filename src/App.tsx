import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
