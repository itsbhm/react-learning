function Greeting({ name, age, occupation }) {
    return (
      <div>
        <h2>Hello, {name}!</h2>
        <p>You are {age} years old and work as a {occupation}.</p>
      </div>
    );
  }
  
  function App() {
    const user = { name: "Alice", age: 30, occupation: "Developer" };
    
    return <Greeting {...user} />;
  }
  
  