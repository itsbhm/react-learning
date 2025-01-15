// ReExporting.js

// Re-exporting named exports
export { Component1, Component2 } from './NamedExports';

// Re-exporting default export as a named export
export { default as DefaultComponent } from './DefaultExport';

// Re-exporting and renaming
export { Component1 as RenamedComponent } from './NamedExports';

// Usage in another file:
// import { Component1, Component2, DefaultComponent, RenamedComponent } from './ReExporting';

