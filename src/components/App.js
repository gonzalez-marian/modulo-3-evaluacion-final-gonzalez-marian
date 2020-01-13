import React from 'react';
import '../styles/App.css';
import { fetchPersons } from '../services/api';
import PersonsList from './PersonsList';
import PersonsSearch from './PersonsSearch'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      allPersons: [],
      value: ''
    }
  }
  componentDidMount() {
    fetchPersons()
      .then(person => {
        this.setState({
          allPersons: person.results
        })
      })
  }
  handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div className="App">
        <PersonsSearch handleChange={this.handleChange} />
        <PersonsList
          allPersons={this.state.allPersons}
        />
      </div>
    );
  }
}

export default App;
