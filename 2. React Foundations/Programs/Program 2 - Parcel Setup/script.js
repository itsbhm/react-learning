import React from "react";
import ReactDOM from "react-dom/client";

/*
<div id="container">
    <div id="container-x">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div>

    <div id="container-y">
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
    </div>
</div>
*/

const containerDiv = React.createElement("div", { id: "container" }, [
    React.createElement("div", { id: "container-x" }, [
      React.createElement("h1", {}, "Heading 1"),
      React.createElement("h2", {}, "Heading 2"),
    ]),
    React.createElement("div", { id: "container-y" }, [
      React.createElement("h3", {}, "Heading 3"),
      React.createElement("h4", {}, "Heading 4"),
    ]),
  ]);
  
  const app = ReactDOM.createRoot(document.getElementById("app"));
  app.render(containerDiv);