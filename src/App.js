import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Results from './Results';

class App extends React.Component {

  state = {
    results: [],
    loading: false
  }

  submitSearch = (event) => {
    event.preventDefault();
    this.getRepos(event.target.searchedName.value);
    event.target.searchedName.value="";
  }

  getRepos = (search) => {
    this.setState({loading: true})
    fetch(`https://api.github.com/users/${search}/repos`)
      .then(res => res.json())
      .then(data => this.setState({results: data, loading: false}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Github Username Search</h1>
        </header>
        <SearchBox handleSubmit={this.submitSearch}/>
        <Results results={this.state.results} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
