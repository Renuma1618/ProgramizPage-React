import React from 'react';
import { SiSwift } from 'react-icons/si';
import './Swift.css';

const Swift = () => {
  return (
    <div className="swift-container">
      <h1><SiSwift /> Swift</h1>
      <p>
        Swift is Apple’s modern programming language for building apps for iOS, macOS, watchOS, and tvOS. It's fast, safe, and expressive.
      </p>

      <h2>Getting Started with Swift</h2>
      <ul>
        <li>Variables and Constants</li>
        <li>Control Flow</li>
        <li>Functions</li>
        <li>Optionals</li>
        <li>Structs and Classes</li>
      </ul>

      <h2>Example: Hello World</h2>
      <pre className="code-block">
{`import Swift

print("Hello, Swift!")`}
      </pre>
    </div>
  );
};

export default Swift;
