import React from 'react'
import {Brand, Cta, Navbar} from './components'
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './containers'
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App