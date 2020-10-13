import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons : [
      {name: 'Akshit', age: '21'},
      {name: 'Viral', age: '22'},
      {name: 'Anand', age: '22'},
    ],
    otherState : 'This is only for an example.'
  });

  //you can also separate otherstate as new useState.

  console.log(personsState);
  const switchMeHandler = () => {
    // console.log('you spank me!');
    //DON'T DO THIS: personsState.persons[0].name = 'Akshit Mithaiwala';
    setPersonsState({
      persons : [
        {name: 'Akshit Mithaiwala', age: '21'},
        {name: 'Viral Shastri', age: '22'},
        {name: 'Anand Dhoka', age: '23'},
      ],
      otherState: personsState.otherState
      // when you are using react hook don't forget to add all old data to it.
      // otherwise it isn't work after set-state.
    })
  }

  return (
    <div className="App">
      <h1>Hello There, Mr. Akshit Mithaiwala</h1>
      <p>I'm Web Designer and Developer</p>
      <button onClick={switchMeHandler}>Switch me!</button>
      <Person name="Akshit (static)" age="21" >I want to become a Full Stack Developer</Person>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Akshit Mithaiwala'));
}

export default app;