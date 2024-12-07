/*
<div id="container">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
</div>
*/

const containerDiv = React.createElement("div", {id:"container"},
    [
        React.createElement("h1", {}, "Heading 1"),
        React.createElement("h2", {}, "Heading 2")
    ]
);

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(containerDiv);