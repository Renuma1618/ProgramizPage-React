import React from 'react';
import { SiNumpy } from 'react-icons/si';
import './Numpy.css';

const Numpy = () => {
  return (
    <div className="numpy-container">
      <h1><SiNumpy /> NumPy</h1>
      <p>
        NumPy is the core library for numerical computing in Python. It provides support for arrays, matrices, and high-performance mathematical operations.
      </p>

      <h2>Getting Started with NumPy</h2>
      <ul>
        <li>Arrays and Shapes</li>
        <li>Broadcasting</li>
        <li>Mathematical Operations</li>
        <li>Indexing and Slicing</li>
        <li>Random Module</li>
      </ul>

      <h2>Example: Basic Array</h2>
      <pre className="code-block">
{`import numpy as np

arr = np.array([1, 2, 3])
print(arr)`}
      </pre>
    </div>
  );
};

export default Numpy;
