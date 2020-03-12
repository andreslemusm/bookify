import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <h1 className="title is-1">
      <FontAwesomeIcon icon={fas.faCoffee} /> ¡Hola!
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
