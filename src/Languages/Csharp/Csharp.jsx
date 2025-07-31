import React from 'react';

import './Csharp.css';

const Csharp = () => {
  return (
    <div className="csharp-container">
      <h1> C#</h1>
      <p>
        C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for Windows development and in the .NET ecosystem.
      </p>

      <h2>Getting Started with C#</h2>
      <ul>
        <li>Variables and Types</li>
        <li>Classes and Methods</li>
        <li>LINQ Queries</li>
        <li>Asynchronous Programming</li>
        <li>Windows and Web Apps</li>
      </ul>

      <h2>Example: Hello World in C#</h2>
      <pre className="code-block">
{`using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello, C#!");
  }
}`}
      </pre>
    </div>
  );
};

export default Csharp;
