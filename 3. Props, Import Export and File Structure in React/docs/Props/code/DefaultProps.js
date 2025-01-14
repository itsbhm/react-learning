function Greeting({ name = "Guest" }) {
    return <h1>Hello, {name}!</h1>;
  }
  
  // Usage
  <Greeting /> // Will display "Hello, Guest!"
  <Greeting name="Alice" /> // Will display "Hello, Alice!"
  
  