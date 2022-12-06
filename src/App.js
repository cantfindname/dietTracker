
import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';

function App() {
  document.body.style.backgroundColor = "#767676";
  document.body.style.margin = "0";
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}
export default App;
