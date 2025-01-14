// DefaultExport.js

// Importing React (required for JSX)
import React from 'react';

// Defining a functional component
const DefaultComponent = ({ message }) => {
  return <div>{message}</div>;
};

// Using a default export
// This allows us to import this component with any name we choose
export default DefaultComponent;

// Usage in another file:
// import AnyNameYouWant from './DefaultExport';

