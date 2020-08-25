import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserCollection from './components/UserCollection/UserCollection';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <UserCollection></UserCollection>
    </div>
  );
}

export default App;
