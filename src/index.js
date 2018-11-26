import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ShortStory from "short-story";

import StandardButton from "./components/buttons/Standard";

const ButtonStandard = props => {
  return (
    <ShortStory
      name="Button (Standard)"
      knobs={{
        textContent: {
          type: "text",
          label: "Text",
          default: "Stay in the know"
        },
        icon: {
          type: "text",
          label: "Icon",
          default: ""
        },
        pose: {
          type: "enum",
          label: "State",
          options: ["init", "hover", "press"],
          labels: ["Default", "Hover", "Press"],
          default: "init"
        },
        type: {
          type: "enum",
          label: "Type",
          options: ["light", "dark", "white", "flat"],
          labels: ["Light", "Dark", "White", "Flat"],
          default: "light"
        },
        size: {
          type: "enum",
          label: "Size",
          options: ["s", "m"],
          labels: ["Small", "Large"],
          default: "m"
        },
        uppercase: {
          type: "boolean",
          label: "Uppercase",
          default: false
        },
        pointerEvents: {
          type: "boolean",
          label: "Pointer Events",
          default: true
        }
      }}
    >
      {state => <StandardButton {...state}>{state.textContent}</StandardButton>}
    </ShortStory>
  );
};

function App() {
  return (
    <div className="App">
      ITF Interactive components
      <ButtonStandard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
