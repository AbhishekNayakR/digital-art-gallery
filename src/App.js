import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ArtworkDisplay from './components/ArtworkDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <ArtworkDisplay />
      <Footer />
    </div>
  );
}

export default App;
