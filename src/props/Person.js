import React from 'react';
import './css/person.css'; 

function Person({ name, age, email }) {
  return (
    <div className="info-container">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Person;
