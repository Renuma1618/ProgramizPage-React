
import React from 'react'

import { SiR } from 'react-icons/si'
import './Rlang.css'

const Rlang = () => {
  return (
    <div className="r-container">
      <h1><SiR /> R Programming</h1>
      <p>
        R is a powerful language and environment for statistical computing and graphics. 
        It is widely used among statisticians and data miners for data analysis.
      </p>

      <h2>Getting Started with R</h2>
      <ul>
        <li>Variables and Data Types</li>
        <li>Vectors, Lists, and Data Frames</li>
        <li>Functions</li>
        <li>Data Visualization with ggplot2</li>
        <li>Statistical Modeling</li>
      </ul>

      <h2>Example: Basic R Syntax</h2>
      <pre className="code-block">
{`# R Example
x <- c(1, 2, 3, 4, 5)
mean(x)`}
      </pre>

      <p>
        R has extensive packages like <strong>ggplot2</strong>, <strong>dplyr</strong>, <strong>tidyr</strong>, and <strong>caret</strong> to support machine learning, visualization, and data manipulation.
      </p>
    </div>
  );
};

export default Rlang
