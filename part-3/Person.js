const Person = ({ name, age, hobbies }) => (
  <div>
    <p>
      Learn more about {name}, age {age}
    </p>
    <h3>{age >= 18 ? "please go vote" : "you must be 18"}</h3>
    <h4>More about {name.length > 8 ? `${name.slice(0, 6)}...` : name}</h4>
    <ul>
      {hobbies.map((h) => (
        <li>{h}</li>
      ))}
    </ul>
  </div>
);
