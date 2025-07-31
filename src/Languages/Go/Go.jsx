import React from 'react';
import { SiGo } from 'react-icons/si';
import './Go.css';

const Go = () => {
  return (
    <div className="go-container">
      <h1><SiGo /> Go Language</h1>
      <p>
        Go (or Golang) is a statically typed, compiled language designed by Google known for its simplicity and concurrency support.
      </p>

      <h2>Getting Started with Go</h2>
      <ul>
        <li>Packages and Imports</li>
        <li>Functions and Variables</li>
        <li>Goroutines and Channels</li>
        <li>Structs and Interfaces</li>
        <li>Standard Library</li>
      </ul>

      <h2>Example: Hello World in Go</h2>
      <pre className="code-block">
{`package main

import "fmt"

func main() {
  fmt.Println("Hello, Go!")
}`}
      </pre>
    </div>
  );
};

export default Go;
