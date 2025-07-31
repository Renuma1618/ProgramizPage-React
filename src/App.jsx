import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Python from './Languages/Python/Python'
import Sql from './Languages/SQL/Sql'
import Rlang from './Languages/R/Rlang'
import Html from './Languages/HTML/Html'
import Css from './Languages/CSS/Css'
import Javascript from './Languages/Javascript/JavaScript'
import Typescript from './Languages/TypeScript/TypeScript'
import Clanguage from './Languages/Clangauge/Clanguage'
import Cpp from './Languages/C++/C++'
import Csharp from './Languages/Csharp/Csharp'
import Go from './Languages/Go/Go'
import Kotlin from './Languages/Kotlin/Kotlin'
import Swift from './Languages/Swift/Swift'
import Numpy from './Languages/Numpy/Numpy'
import Pandas from './Languages/Pandas/Pandas'
import Ruby from './Languages/Ruby/Ruby'
import Rust from './Languages/Rust/Rust'

import Tutorials from './Components/Tutorials/Tutorials'

const App = () => {
  return (

    
    <div>
      <Navbar/>
       
       <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path='/python' element={<Python/>}></Route>
        <Route path='/sql' element={<Sql/>}></Route>
        <Route path='/Rlang' element={<Rlang/>}></Route>
        <Route path='/html' element={<Html/>}></Route>
        <Route path='/css' element={<Css/>}></Route>
        <Route path='/javascript' element={<Javascript/>}></Route>
        <Route path='/typescript' element={<Typescript/>}></Route>
        <Route path='/Clanguage' element={<Clanguage/>} ></Route>
        <Route path='/C++language' element={<Cpp/>} ></Route>
        <Route path='/Csharplanguage' element={<Csharp/>}></Route>
        <Route path='/Golanguage' element={<Go/>}></Route>
        <Route path='/kotlin' element={<Kotlin/>}></Route>
        <Route path='/swift' element={<Swift/>}></Route>
        <Route path='/numpy' element={<Numpy/>}></Route>
        <Route path='/pandas' element={<Pandas/>}></Route>
        <Route path='/ruby' element={<Ruby/>}></Route>
        <Route path='/rust' element={<Rust/>}></Route>  
       </Routes> 
    </div>

  )

}


export default App
