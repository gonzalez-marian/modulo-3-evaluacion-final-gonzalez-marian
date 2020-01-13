import React from 'react';
import '../styles/App.css';
import { fetchPersons, fetchSinglePersons } from '../services/api';
import PersonsList from './PersonsList';
import PersonsSearch from './PersonsSearch';
import PersonsDetail from './PersonsDetail'
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderPersonsDetail = this.renderPersonsDetail.bind(this);

    this.state = {
      allPersons: [],
      value: '',

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
    console.log(value)
  }

  renderPersonsDetail(props) {
    console.log(props)
    const personId = parseInt(props.match.params.id);
    const person = this.state.allPersons.find(person => person.id === personId)
    console.log(person)
    return <PersonsDetail person={person} />
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <PersonsSearch handleChange={this.handleChange} />
            <PersonsList
              allPersons={this.state.allPersons}
              value={this.state.value}
            />
          </Route>
          <Route path="/person/:id" render={this.renderPersonsDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
