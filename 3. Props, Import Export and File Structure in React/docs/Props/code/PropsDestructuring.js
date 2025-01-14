function UserProfile({ name, age, occupation }) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
      </div>
    );
  }
  
  // Usage
  <UserProfile name="Alice" age={30} occupation="Developer" />
  
  