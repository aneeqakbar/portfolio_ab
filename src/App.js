import './App.css';
import React, { useState,useEffect } from 'react';
import {Route,Switch,useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Home from './routes/Home';
import About from './routes/About';
import Works from './routes/Works';
import Contact from './routes/Contact';
import MotionContextProvider from './MotionContext.js'

function App(){
  const location = useLocation();
  const [bg_linear_deg, set_bg_linear_deg] = useState({x:0,y:0})
  const [overflow, set_overflow] = useState('hidden')

  useEffect(() => {
    set_overflow('hidden')
    setTimeout(() => {
      set_overflow('unset')
    }, 500);
  }, [location.pathname])

  function handleMouseMove(e) {
    let x = e.clientX;
    let y = e.clientY;
    x = Math.round((x)*100)/100
    y = Math.round((y)*100)/100
    set_bg_linear_deg({
      x:x/100,
      y:y/100
    })
  }
  
return (
    <MotionContextProvider>
      <div className="App" onMouseMove={(event)=>{handleMouseMove(event)}} style={{overflow:`${overflow}`}}>
        <div className="app__background" style={{backgroundPosition:`${bg_linear_deg.x}% ${bg_linear_deg.y}%`}}></div>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}> {/* Switch makes sure one route renders at a time */}
            <Route path='/work' component={Works}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/' component={Home}/>
          </Switch>
        </AnimatePresence>
      </div>
    </MotionContextProvider>
  );
}

export default App;
