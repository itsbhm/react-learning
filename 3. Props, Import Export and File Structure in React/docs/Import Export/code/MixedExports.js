// MixedExports.js

// Importing React (required for JSX)
import React from 'react';

// Named export
export const NamedComponent = () => <div>I'm a named export</div>;

// Default export
const DefaultComponent = () => <div>I'm the default export</div>;

export default DefaultComponent;

// Usage in another file:
// import DefaultComponent, { NamedComponent } from './MixedExports';

