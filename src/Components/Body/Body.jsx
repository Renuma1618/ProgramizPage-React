import React from 'react';
import './Body.css';

import {
  SiPython, SiR, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiC, SiCplusplus, SiGo, SiKotlin, SiSwift,
  SiNumpy, SiPandas, SiRust, SiRuby, 
  SiCashapp
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Body = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="body">
        <h1>Learn programming for free</h1>
      </div>

      <div className="grid-container">
        <button onClick={() => handleClick('/python')}>
          <span className="icon-wrapper"><span className="icon-box"><SiPython /></span></span>Python
        </button>
        <button onClick={() => handleClick('/Sql')}>
          <span className="icon-wrapper"><span className="icon-box"><FaDatabase /></span></span>SQL
        </button>
        <button onClick={() => handleClick('/Rlang')}>
          <span className="icon-wrapper"><span className="icon-box"><SiR /></span></span>R
        </button>
        <button onClick={() => handleClick('/html')}>
          <span className="icon-wrapper"><span className="icon-box"><SiHtml5 /></span></span>HTML
        </button>
        <button onClick={() => handleClick('/css')}>
          <span className="icon-wrapper"><span className="icon-box"><SiCss3 /></span></span>CSS
        </button>
        <button onClick={() => handleClick('/javascript')}>
          <span className="icon-wrapper"><span className="icon-box"><SiJavascript /></span></span>JavaScript
        </button>
        <button onClick={() => handleClick('/typescript')}>
          <span className="icon-wrapper"><span className="icon-box"><SiTypescript /></span></span>TypeScript
        </button>
        <button onClick={() => handleClick('/Clanguage')}>
          <span className="icon-wrapper"><span className="icon-box"><SiC /></span></span>C
        </button>
        <button onClick={() => handleClick('/C++language')}>
          <span className="icon-wrapper"><span className="icon-box"><SiCplusplus /></span></span>C++
        </button>
        <button onClick={() => handleClick('/Csharplanguage')}>
          <span className="icon-wrapper"><span className="icon-box"><SiCashapp /></span></span>C#
        </button>
        <button onClick={() => handleClick('/Golanguage')}>
          <span className="icon-wrapper"><span className="icon-box"><SiGo /></span></span>GO
        </button>
        <button onClick={() => handleClick('/kotlin')}>
          <span className="icon-wrapper"><span className="icon-box"><SiKotlin /></span></span>Kotlin
        </button>
        <button onClick={() => handleClick('/swift')}>
          <span className="icon-wrapper"><span className="icon-box"><SiSwift /></span></span>Swift
        </button>
        <button onClick={() => handleClick('/numpy')}>
          <span className="icon-wrapper"><span className="icon-box"><SiNumpy /></span></span>Numpy
        </button>
        <button onClick={() => handleClick('/pandas')}>
          <span className="icon-wrapper"><span className="icon-box"><SiPandas /></span></span>Pandas
        </button>
        <button onClick={() => handleClick('/Rust')}>
          <span className="icon-wrapper"><span className="icon-box"><SiRust /></span></span>Rust
        </button>
        <button onClick={() => handleClick('/Ruby')}>
          <span className="icon-wrapper"><span className="icon-box"><SiRuby /></span></span>Ruby
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default Body;
