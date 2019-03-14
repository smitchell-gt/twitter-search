import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchComponent />
        </header>
      </div>
    );
  }
}

export default App;
