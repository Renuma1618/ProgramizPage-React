import React from 'react';
import { SiPandas } from 'react-icons/si';
import './Pandas.css';

const Pandas = () => {
  return (
    <div className="pandas-container">
      <h1><SiPandas /> Pandas</h1>
      <p>
        Pandas is a Python library for data manipulation and analysis. It offers powerful data structures like Series and DataFrame.
      </p>

      <h2>Getting Started with Pandas</h2>
      <ul>
        <li>Series and DataFrames</li>
        <li>Reading CSV and Excel files</li>
        <li>Data Cleaning</li>
        <li>Grouping and Aggregation</li>
        <li>Filtering and Sorting</li>
      </ul>

      <h2>Example: Load CSV</h2>
      <pre className="code-block">
{`import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())`}
      </pre>
    </div>
  );
};

export default Pandas;
