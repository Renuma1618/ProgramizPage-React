import React from 'react'
import { SiHtml5 } from 'react-icons/si';
import './Html.css'; 

const Html = () => {
  return (
   <div className="r-container">
      <h1><SiHtml5 /> HTML</h1>
      <p>
        HTML (HyperText Markup Language) is the standard language used to create webpages.
        It defines the structure and content of web pages.
      </p>

      <h2>Getting Started with HTML</h2>
      <ul>
        <li>Elements and Tags</li>
        <li>Attributes</li>
        <li>Forms and Input</li>
        <li>Semantic HTML</li>
        <li>Links, Images, and Media</li>
      </ul>

      <h2>Example: Basic HTML Structure</h2>
      <pre className="code-block">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`}
      </pre>
    </div>
  );
};
export default Html
