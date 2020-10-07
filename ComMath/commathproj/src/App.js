import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require('./static/images/rtx3090.png')} width="400" height="300" />
        <p>
          Hello! Myname is Jamess Nakrab eiei XD
        </p>
        <a
          className="App-link"
          href="https://web.facebook.com/james.kittiphon.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          FACEBOOK
        </a>
      </header>
    </div>
  );
}

export default App;
