import React from "react";
import ReactDOM from "react-dom/client";

// Using Only React Element/ Object
const h = React.createElement("h1", {}, "Hello from React");

// Using JSX (JSX Will render to React Element/ Object by Babel or transpilation technique)
const jsxItem1 = <h2>Hi, I'm from JSX</h2>;

let dt = Date();

const jsxItem2 = (
  <div>
    <h3 className="color-h-pink">Hello React using JSX at {dt}</h3>
  </div>
);

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(jsxItem2);
