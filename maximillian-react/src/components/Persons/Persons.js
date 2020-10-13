import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( (person, index) => {
    return <Person
      clickme={() => props.clickme(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changeme={(event) => props.changeme(event, person.id)} />
    }) ;

export default persons;