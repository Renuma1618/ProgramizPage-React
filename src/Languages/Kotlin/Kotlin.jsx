import React from 'react';
import { SiKotlin } from 'react-icons/si';
import './Kotlin.css';

const Kotlin = () => {
  return (
    <div className="kotlin-container">
      <h1><SiKotlin /> Kotlin</h1>
      <p>
        Kotlin is a modern, expressive programming language developed by JetBrains. It's fully interoperable with Java and is the preferred language for Android development.
      </p>

      <h2>Getting Started with Kotlin</h2>
      <ul>
        <li>Variables and Data Types</li>
        <li>Functions and Lambdas</li>
        <li>Classes and Inheritance</li>
        <li>Null Safety</li>
        <li>Coroutines</li>
      </ul>

      <h2>Example: Hello World</h2>
      <pre className="code-block">
{`fun main() {
  println("Hello, Kotlin!")
}`}
      </pre>
    </div>
  );
};

export default Kotlin;
