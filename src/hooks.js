import React, { useState, useRef } from "react";
import { uniqueId, reduce } from "lodash";

let refs = {};

const StringInput = ({ name, currentValue, inputRef }) => {
  console.log(inputRef);
  return (
    <input
      ref={refs[name]}
      name={name}
      type="text"
      defaultValue={currentValue}
    />
  );
};

const NumberInput = ({ name, currentValue, inputRef, min, max, step }) => {
  return (
    <div>
      <div
        style={{
          width: "calc(100% - 16px)",
          textAlign: "center"
        }}
      >
        <small key={uniqueId()}>{currentValue}</small>
      </div>
      <input
        key={uniqueId()}
        ref={inputRef}
        type="range"
        min={min || 0}
        max={max || 100}
        step={step || 1}
        defaultValue={currentValue || 1}
        style={{
          width: "calc(100% - 16px)"
        }}
      />
      <div
        key={uniqueId()}
        style={{
          display: "flex",
          width: "calc(100% - 16px)",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          fontSize: ".9em"
        }}
      >
        <span key={uniqueId()}>{min}</span>
        <span key={uniqueId()}>{max}</span>
      </div>
    </div>
  );
};

export function useShortStory(knobs) {
  const reducer = (acc, k) => {
    const v = knobs[k].defaultValue || null;
    return { ...acc, [k]: v };
  };

  const [state, setState] = useState(reduce(Object.keys(knobs), reducer, {}));

  refs = useState(
    reduce(
      Object.keys(knobs),
      (acc, k) => {
        return { ...acc, [k]: React.createRef() };
      },
      {}
    )
  );

  const getKnobElement = name => {
    const knob = knobs[name];
    const ref = refs[name];
    const props = {
      key: uniqueId(),
      inputRef: ref,
      currentValue: state[name],
      ...knob
    };

    refs.push(ref);

    const elements = {
      string: <StringInput {...props} />,
      number: <NumberInput {...props} />,
      textarea: <textarea />
    };

    return elements[knob.type];
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(refs);
    const values = reduce(
      refs,
      (arr, cur) => {
        console.log(cur);
        const elm = cur.current;
        return { ...arr, [elm.name]: elm.value };
      },
      {}
    );

    setState(values);
  };

  const knobInputs = Object.keys(knobs).map(k => getKnobElement(k));

  const Wrapper = ({ children }) => (
    <div>
      {children}
      <form onSubmit={handleSubmit}>
        {knobInputs}
        <input type="submit" />
      </form>
    </div>
  );

  return [Wrapper, state];
}
