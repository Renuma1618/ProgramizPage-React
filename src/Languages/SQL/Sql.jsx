import React from 'react'
import './Sql.css'

const Sql = () => {
  return (
    <div className="sql-content">
      <h1>Welcome to SQL</h1>
      <p>SQL (Structured Query Language) is used to manage and manipulate relational databases.</p>

      <h2>Why Learn SQL?</h2>
      <ul>
        <li>Query and retrieve data from databases</li>
        <li>Used by data analysts, backend developers, and data engineers</li>
        <li>Works with MySQL, PostgreSQL, SQL Server, SQLite, and more</li>
      </ul>

      <h2>Basic SQL Example:</h2>
      <pre>
        <code>{`SELECT name, age FROM students WHERE age > 18;`}</code>
      </pre>

      <h2>Common SQL Commands:</h2>
      <ul>
        <li><code>SELECT</code> – retrieves data from the database</li>
        <li><code>INSERT</code> – adds new data</li>
        <li><code>UPDATE</code> – modifies existing data</li>
        <li><code>DELETE</code> – removes data</li>
        <li><code>CREATE TABLE</code> – defines a new table</li>
      </ul>
    </div>
  );
};


export default Sql
