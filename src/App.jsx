
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import { useState, useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from "framer-motion"
function App() {

  const [isClick, setIsClick]=useState(false)
  const ref= useRef(null)
  const isInView = useInView(ref,{once:true})
  const animationControls = useAnimation()

  useEffect(()=>{
    if(isInView){    
      animationControls.start("visible")
    }

  },[isInView])

  const darkMode={
    backgroundColor: isClick ? '#000' : '#fff',
    color: isClick? '#fff' :'#000'
  }

  const iconColors={
    color: isClick ? '#fff' :'#000'
  }

  function clickHandle(){
    if(isClick===false){
      setIsClick(true)
    }else{
      setIsClick(false)
    }
  }

  const buttonColors={
    backgroundColor: isClick ? '#fff' : '#000',
    color: isClick ? '#000' : '#fff',
  }
  
  return (
    <div className="App"  style={darkMode} ref={ref}>
      <Nav onClick={clickHandle} isClick={isClick}/>
      <motion.div
      variants={{
        hidden:{opacity:0, y:80},
        visible:{opacity:1, y:0}
      }}
       initial="hidden"
       animate={animationControls}
       transition={{duration: 0.5, delay:0.25}}
      >
      <Hero buttonColors={buttonColors}/>      
      <About buttonColors={buttonColors}/>
      <Skills buttonColors={buttonColors}/>
      <Experience buttonColors={buttonColors}/>
      <Projects buttonColors={buttonColors}/>
      <Contact buttonColors={buttonColors} iconColors={iconColors}/>   
      </motion.div>
    </div>
  );
}

export default App;
