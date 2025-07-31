import React from 'react';
import { SiCplusplus } from 'react-icons/si';
import './C++.css';

const Cpp= () => {
  return (
    <div className="cpp-container">
      <h1><SiCplusplus /> C++</h1>
      <p>
        C++ is an extension of C that supports object-oriented programming. It's used in software infrastructure, games, and performance-critical applications.
      </p>

      <h2>Getting Started with C++</h2>
      <ul>
        <li>Classes and Objects</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Templates</li>
        <li>STL (Standard Template Library)</li>
      </ul>

      <h2>Example: Hello World in C++</h2>
      <pre className="code-block">
{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello, C++!" << endl;
  return 0;
}`}
      </pre>
    </div>
  );
};

export default Cpp;
