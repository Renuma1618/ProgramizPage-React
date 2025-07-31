import React from 'react';
import { SiRust } from 'react-icons/si';
import './Rust.css';

const Rust = () => {
  return (
    <div className="rust-container">
      <h1><SiRust /> Rust</h1>
      <p>
        Rust is a system programming language focused on performance and safety. It offers memory safety without garbage collection.
      </p>

      <h2>Getting Started with Rust</h2>
      <ul>
        <li>Ownership and Borrowing</li>
        <li>Structs and Enums</li>
        <li>Crates and Cargo</li>
        <li>Error Handling</li>
        <li>Concurrency</li>
      </ul>

      <h2>Example: Hello World</h2>
      <pre className="code-block">
{`fn main() {
  println!("Hello, Rust!");
}`}
      </pre>
    </div>
  );
};

export default Rust;
