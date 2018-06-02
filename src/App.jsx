import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap'
import './App.css';

class App extends Component {
  state = {
    searchValue: ""
  };
  search() {
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    fetch(`${url}${this.state.searchValue}`, {method: "GET"})
      .then(res => res.json())
      .then(data => console.log(data.items));
  }
  render() {
    return (
      <div className="container">
        <h2>Book Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for books here" onChange={e => this.setState({
              searchValue: e.target.value
            })} value={this.state.searchValue}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  this.search()
                }
              }} />
            <Button onClick={() => this.search()}>Search</Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default App;
