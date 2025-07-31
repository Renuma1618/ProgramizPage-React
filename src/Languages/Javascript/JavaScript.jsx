import React from 'react';
import { SiJavascript } from 'react-icons/si';
import './JavaScript.css';  

const Javascript = () => {
  return (
    <div className="r-container">
      <h1><SiJavascript /> JavaScript</h1>
      <p>
        JavaScript is a versatile programming language that enables interactive web pages.
        It runs in browsers and on servers (Node.js).
      </p>

      <h2>Getting Started with JavaScript</h2>
      <ul>
        <li>Variables and Data Types</li>
        <li>Functions and Scope</li>
        <li>DOM Manipulation</li>
        <li>Events and Listeners</li>
        <li>ES6 Features (let, const, arrow functions)</li>
      </ul>

      <h2>Example: Basic JavaScript</h2>
      <pre className="code-block">
{`const greeting = "Hello, world!";
console.log(greeting);`}
      </pre>
    </div>
  );
};

export default Javascript;
