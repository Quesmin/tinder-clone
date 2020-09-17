import React from 'react';
import TinderCards from './TinderCards';
import './App.css';
import Header from './Header'
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header/>

      {/* TINDER CARDS */}
      <TinderCards/>

      {/* SWIPE BUTTONS */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
