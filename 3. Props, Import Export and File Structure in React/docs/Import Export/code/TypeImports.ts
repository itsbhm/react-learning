// TypeImports.ts

// Importing React (required for JSX)
import React from 'react';

// Importing types
import type { FC, ReactNode } from 'react';

// Defining a type
type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

// Using the imported and defined types
const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

// Usage in another file:
// import Button from './TypeImports';
// import type { ButtonProps } from './TypeImports';

