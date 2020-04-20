import React from 'react'
import useMyErrorMessage from "./my-hook";

export default function Hello() {
  const {component, showError} = useMyErrorMessage();
  return (
    <div>
      <button onClick={() => showError(`New error: ${Date.now()}`)}>Throw Error</button>
      <button onClick={() => showError(undefined)}>Clear Error</button>
      <hr/>
      {component}
    </div>
  );
}
