import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
class App extends React.Component {
  constructor() {
    super(); //calls constructor of this component
    this.state = {
      robots: [],
      searchfield: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
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
    if (robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
