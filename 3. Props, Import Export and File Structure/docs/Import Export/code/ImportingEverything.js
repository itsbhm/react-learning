// ImportingEverything.js

// Importing React (required for JSX)
import React from 'react';

// Importing everything from NamedExports.js
import * as Components from './NamedExports';

const ImportingEverything = () => {
  return (
    <div>
      <h1>Importing Everything Example</h1>
      <Components.Component1 />
      <Components.Component2 />
      <p>{Components.utilityFunction()}</p>
    </div>
  );
};

export default ImportingEverything;

