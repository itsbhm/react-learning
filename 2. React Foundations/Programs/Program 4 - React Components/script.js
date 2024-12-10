import React from "react"; // Importing React library to work with JSX and React components
import ReactDOM from "react-dom/client"; // Importing ReactDOM to render components to the DOM

let dt = Date(); // Assigning the current date/time as a string to the variable `dt`

// In React, there are two main types of components:
// 1). Class-based Components (older way)
// 2). Function-based Components (modern way) 🔥

// Function-based component Fn1 that simply returns true (not rendered)
const Fn1 = () => {
  return true;
};

// A simple function-based component that renders an <h1> element with text
const Heading1 = () => {
  return <h1>Hi from heading1</h1>;
};

// Function-based component Fn2 that also returns true (not rendered)
const Fn2 = () => true;

// A simple function-based component that renders an <h2> element with text
const Heading2 = () => <h2>Hi from heading2</h2>;

// A function-based component that renders a <div> containing an <h3> element
// and dynamically includes the current date/time from the `dt` variable
const Heading3 = () => (
  <div>
    <h3 className="color-h-pink">Hello React using JSX at {dt}</h3>
  </div>
);

// The main test component that contains multiple instances of Heading2 and Heading3 components
const TestComponent = () => (
  <div id="parent-element">
    <Heading2 /> {/* Rendering Heading2 component */}
    <Heading3 /> {/* Rendering Heading3 component */}
    <Heading3></Heading3> {/* Another instance of Heading3 with closing tag */}
    {Heading3()} {/* Calling Heading3 as a function, but this is incorrect in JSX */}
  </div>
);

// Render the TestComponent into the DOM element with id "app"
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<TestComponent />); // Rendering the TestComponent to the root
