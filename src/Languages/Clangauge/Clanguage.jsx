import React from 'react';
import { SiC } from 'react-icons/si';
import './Clanguage.css';

const Clanguage = () => {
  return (
    <div className="c-container">
      <h1><SiC /> C Language</h1>
      <p>
        C is a general-purpose, procedural programming language that provides low-level memory access and is widely used in system programming.
      </p>

      <h2>Getting Started with C</h2>
      <ul>
        <li>Data Types and Variables</li>
        <li>Control Structures</li>
        <li>Functions</li>
        <li>Pointers and Memory</li>
        <li>File Handling</li>
      </ul>

      <h2>Example: Hello World in C</h2>
      <pre className="code-block">
{`#include <stdio.h>

int main() {
  printf("Hello, World!");
  return 0;
}`}
      </pre>
    </div>
  );
};

export default Clanguage;
