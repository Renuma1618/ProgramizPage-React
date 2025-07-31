import React from 'react';
import { SiTypescript } from 'react-icons/si';
import './TypeScript.css';  // reuse same CSS

const Typescript = () => {
  return (
    <div className="r-container">
      <h1><SiTypescript /> TypeScript</h1>
      <p>
        TypeScript is a superset of JavaScript that adds static types to help catch errors early and improve code quality.
      </p>

      <h2>Getting Started with TypeScript</h2>
      <ul>
        <li>Type Annotations</li>
        <li>Interfaces and Types</li>
        <li>Classes and Inheritance</li>
        <li>Generics</li>
        <li>Type Inference</li>
      </ul>

      <h2>Example: Basic TypeScript</h2>
      <pre className="code-block">
{`function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("World"));`}
      </pre>
    </div>
  );
};

export default Typescript;
