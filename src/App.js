import React, { Component } from 'react';
import SearchField from 'react-search-field';
import './App.css';

class App extends Component {
  handleSearch = searchText => {
    console.log('making a search:', searchText);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchField
            placeholder="Search here..."
            onEnter={this.handleSearch}
            onSearchClick={this.handleSearch}
          />
        </header>
      </div>
    );
  }
}

export default App;
