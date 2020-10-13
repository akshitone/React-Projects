import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: 'Akshit', age: '21' },
      { id: 'abc2', name: 'Viral', age: '22' },
      { id: 'abc3', name: 'Anand', age: '22' },
    ],
    showData: false
  }

  switchMeHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '21' },
        { name: 'Viral Shastri', age: '22' },
        { name: 'Anand Dhoka', age: '23' },
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = this.state.persons[personIndex];
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showData;
    this.setState({ showData: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.showData) {
      persons = <Persons 
            persons={this.state.persons}
            changeme={this.nameChangeHandler}
            clickme={this.deletePersonHandler} />;
    }

    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          title = {this.props.appTitle}
          showData = {this.state.showData}
          personsLength={this.state.persons.length}
          toggleMe = {this.togglePersonsHandler} />
        {persons}
      </WithClass>
    );
  }
}

export default App;
