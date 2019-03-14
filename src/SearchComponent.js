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

  handleSearch = searchText => {
    if (!searchText) {
      this.setState({isEmptySearch: true});
    } else {
      this.setState({
        isEmptySearch: false,
        searchData: `Tweet Data for search: ${searchText}`
      });
    }
  };

  render() {
    const renderContents =
      this.state.isEmptySearch
        ? <div style={{'color': 'red'}}>Please make a non-empty search.</div>
        : this.state.searchData;
    return(
      <div>
        <SearchField
          placeholder="Search here..."
          onEnter={this.handleSearch}
          onSearchClick={this.handleSearch}
        />
        <br /><br />
        { renderContents }
      </div>
    );
  }
}

export default SearchComponent;