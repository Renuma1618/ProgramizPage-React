import React from 'react';
import './Python.css'; 

const Python= () => {
  return (
    <div className="python-content">
      <h1>Welcome to Python</h1>
      <p>Python is a popular, beginner-friendly programming language known for its readability and versatility.</p>

      <h2>Why Learn Python?</h2>
      <ul>
        <li>Simple and clean syntax</li>
        <li>Widely used in data science, AI, and web development</li>
        <li>Great community and support</li>
      </ul>

      <h2>Example:</h2>
      <pre><code>print("Hello, Python!")</code></pre>

      <h2>Indentation Matters:</h2>
      <pre>
<code>{`if 5 > 2:
    print("Five is greater than two!")`}</code>
      </pre>
    </div>
  );
};

export default Python;
