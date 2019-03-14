import React, { Component } from 'react';
import SearchField from 'react-search-field';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmptySearch: false,
      searchData: ''
    }
  }

  handleSearch(searchText) {
    if (!searchText) {
      this.setState({isEmptySearch: true});
    } else {
      this.setState({
        isEmptySearch: false,
        searchData: `Tweet Data for search: ${searchText}`
      });
    }
  };

  renderSearchResults() {
    let errorMessage = <div style={{'color': 'red'}}>Please make a non-empty search.</div>;
    return this.state.isEmptySearch
      ? errorMessage
      : this.state.searchData;
  };

  render() {
    return(
      <div>
        <SearchField
          placeholder="Search here..."
          onEnter={this.handleSearch}
          onSearchClick={this.handleSearch}
        />
        <br /><br />
        { this.renderSearchResults() }
      </div>
    );
  }
}

export default SearchComponent;