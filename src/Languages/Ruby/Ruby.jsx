import React from 'react';
import { SiRuby } from 'react-icons/si';
import './Ruby.css';

const Ruby = () => {
  return (
    <div className="ruby-container">
      <h1><SiRuby /> Ruby</h1>
      <p>
        Ruby is an elegant, expressive scripting language known for its simplicity and productivity. It is the language behind Ruby on Rails.
      </p>

      <h2>Getting Started with Ruby</h2>
      <ul>
        <li>Variables and Types</li>
        <li>Methods and Blocks</li>
        <li>Control Flow</li>
        <li>Object-Oriented Programming</li>
        <li>Gems and Bundler</li>
      </ul>

      <h2>Example: Hello World</h2>
      <pre className="code-block">
{`puts "Hello, Ruby!"`}
      </pre>
    </div>
  );
};

export default Ruby;
