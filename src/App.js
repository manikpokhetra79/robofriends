import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
class App extends React.Component {
  constructor() {
    super(); //calls constructor of this component
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }
  onSearchChange = (e) => {
    this.setState({
      searchfield: e.target.value,
    });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      //this will return only the robots whose name is same as searched input
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    const robots = this.state.robots;
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
