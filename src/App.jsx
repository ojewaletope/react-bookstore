import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap'
import './App.css';

class App extends Component {
  state = {
    searchValue: ""
  };
  search() {
    console.log(this.state.searchValue);
  }
  render() {
    return (
      <div>
        <h2>Book Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for books here" onChange={e => this.setState({
              searchValue: e.target.value
            })} value={this.state.searchValue} />
            <Button onClick={() => this.search()}>Search</Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default App;
