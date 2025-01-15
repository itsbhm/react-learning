import React from "react";
import ReactDOM from "react-dom/client";

const App = (props) => {
  const styled = {
    color: "red",
  };

  return (
    <div style={styled}>
      <h1>Hello, {props.name}.</h1>
      <h2>
        Can we talk? <span>{props.wannatalk}</span>
      </h2>
    </div>
  );
};

const pogu = ReactDOM.createRoot(document.getElementById("app"));
pogu.render(
  <div>
    <App name="Shubham" wannatalk="No" />
    <App name="Mukesh" wannatalk="Yes" />
    <App name="Shubham" wannatalk="No" />
    <App name="Shubham" wannatalk="No" />
    <App name="Shubham" wannatalk="No" />
    <App name="Shubham" wannatalk="No" />
    <App name="Shubham" wannatalk="No" />
  </div>
);
