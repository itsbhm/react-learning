Methods of importing and exporting in React:

1. Default Exports and Imports:


```javascriptreact
// Exporting
export default function Button() {
  // component code
}

// Importing
import Button from './Button.js';
```

Default exports are useful when a module only exports one thing. You can have only one default export per file. When importing, you can give it any name you want .

2. Named Exports and Imports:


```javascriptreact
// Exporting
export function Button() {
  // component code
}

// Importing
import { Button } from './Button.js';
```

Named exports allow you to export multiple things from a single file. When importing, you must use the exact name (but you can use aliasing to rename) .

3. Exporting and Importing Multiple Components:


```javascriptreact
// Exporting
export function Button() { /* ... */ }
export function Input() { /* ... */ }

// Importing
import { Button, Input } from './components.js';
```

This is useful when you want to export multiple components or functions from a single file .

4. Importing Everything:


```javascriptreact
// Exporting
export function Button() { /* ... */ }
export function Input() { /* ... */ }

// Importing
import * as Components from './components.js';

// Usage
<Components.Button />
<Components.Input />
```

This method imports all exports from a module as properties of an object .

5. Renaming Imports:


```javascriptreact
import { Button as CustomButton } from './Button.js';
```

This is useful when you want to avoid naming conflicts or when the imported name is long or unclear .

6. Re-exporting:


```javascriptreact
export { Button } from './Button.js';
```

This allows you to export something that you've imported, which is useful for creating index files that provide a public API for a module .

7. Importing Types:


```javascriptreact
import type { ButtonProps } from './Button.js';
// or
import { type ButtonProps } from './Button.js';
```

When importing types, it's good practice to use the `import type` syntax. This ensures that the type import is removed during compilation and doesn't impact your runtime bundle size .

Remember, the file extension (.js) is optional in imports, but including it can help with consistency and clarity .

These import and export methods give you flexibility in how you structure your React applications. You can choose the method that best fits your needs for each situation, allowing you to create modular, maintainable code.