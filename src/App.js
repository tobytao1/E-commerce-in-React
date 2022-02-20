import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Component/card-list/card-list.component.js";
import { SearchBox } from "./Component/search-box/search-box.component.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((content) => this.setState({ monsters: content }));
  }

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const newMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox placeholder="monsters" changeHandler={this.changeHandler} />

        <CardList monsters={newMonster}></CardList>
      </div>
    );
  }
}

export default App;
