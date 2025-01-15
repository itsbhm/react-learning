function Button({ onClick, text }) {
    return <button onClick={onClick}>{text}</button>;
  }
  
  function App() {
    const handleClick = () => alert('Button clicked!');
    
    return <Button onClick={handleClick} text="Click me" />;
  }
  
  