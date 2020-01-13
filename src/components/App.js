import React from 'react';
import '../styles/App.css';
import { fetchPersons } from '../services/api';
import PersonsList from './PersonsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPersons: []
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

  render() {
    return (
      <div className="App">
        <PersonsList
          allPersons={this.state.allPersons}
        />
      </div>
    );
  }
}

export default App;
