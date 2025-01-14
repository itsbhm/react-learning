// RenamingImports.js

// Importing React (required for JSX)
import React from 'react';

// Renaming imports to avoid naming conflicts or for clarity
import { Component1 as FirstComponent, Component2 as SecondComponent } from './NamedExports';
// import DefaultComponent as MainComponent from './DefaultExport';

const RenamingImports = () => {
  return (
    <div>
      <h1>Renaming Imports Example</h1>
      <FirstComponent />
      <SecondComponent />
      <MainComponent message="I was renamed during import" />
    </div>
  );
};

export default RenamingImports;

