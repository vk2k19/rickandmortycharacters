'use client';

import { useRef } from "react";

export default function Dropdown(props) {
  const onChange = (event) => {
    if (props.onChange && props.onChange instanceof Function) {
      props.onChange(event.target.value)
    }
  }
  const selectRef = useRef();

  return <>
    <div className="form-inline" data-testid="dropdown">
      <label htmlFor="props.id">{props.label}</label>
      <br />
      <select ref={selectRef} className="form-control" name={props.name} id={props.id} onChange={onChange} value={props.value} data-testid="select-dropdown">
        {props.options && props.options.map(option =>
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        )}
      </select>
    </div>
    <style jsx>{`
      .select-input {
        z-index: 10;
      }
      .caret {
        position:absolute;
        right: -0;
      }
      `
    }</style>
  </>;
}
