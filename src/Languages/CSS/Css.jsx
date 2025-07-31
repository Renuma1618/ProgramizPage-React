import React from 'react';
import { SiCss3 } from 'react-icons/si';
import './Css.css';  

const Css = () => {
  return (
    <div className="r-container">
      <h1><SiCss3 /> CSS</h1>
      <p>
        CSS (Cascading Style Sheets) is used to style and layout web pages.
        It controls colors, fonts, spacing, and positioning.
      </p>

      <h2>Getting Started with CSS</h2>
      <ul>
        <li>Selectors and Properties</li>
        <li>Box Model</li>
        <li>Flexbox and Grid</li>
        <li>Responsive Design</li>
        <li>Animations and Transitions</li>
      </ul>

      <h2>Example: Basic CSS Rule</h2>
      <pre className="code-block">
{`h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}`}
      </pre>
    </div>
  );
};

export default Css;
