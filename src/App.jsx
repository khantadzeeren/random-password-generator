import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Arrow from './images/icon-arrow-right.svg';
import Check from './images/icon-check.svg';
import Copy from './images/icon-copy.svg';
import Oval from  './images/Oval.svg'

function App() {

 
 
  const [value,setValue] = useState(10);
  const getBackgroundSize = () => {
    
    return { width: `${(value * 100) / 20}%  `};
  };
  let [password,setPassword] = useState("");
  let [clicked, setClicked]= useState(false);
  let [low, setLow]= useState(false);
  let [number, setNumber]= useState(false);
  let [symbol, setSymbol]= useState(false);
  function uppercasebox (){
    setClicked(!clicked);

  }
  
  function lowercasebox(){
    setLow(!low);
  }

  function numberbox (){
    setNumber(!number);
  }function symbolbox (){
    setSymbol(!symbol);
  }
  function generate (){

    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let Lowercase = "qwertyuiopasdfghjklzxcvbnm"
    let numbers = "0123456789"
    let symbols ="?!@#$%&*(){}[]+-=/\|><~"
    let generatePassword = ""
  
    for ( let i=0 ; i<value; i++) {
      // if ()
      let randomIndex = Math.floor(Math.random() * uppercase.length);
      let randomChar = uppercase.charAt(randomIndex);
      
      generatePassword = generatePassword+randomChar;
        
      if (i>0) {
        
        let randomLow = Math.floor(Math.random() * Lowercase.length);
        let randomLetter = Lowercase.charAt(randomLow);
        
        generatePassword=generatePassword+randomLetter;
      }
      if (i>0) {
        let randomNum =Math.floor(Math.random() * numbers.length);
        let randomNumber = numbers.charAt(randomNum);

        generatePassword=generatePassword+randomNumber
      }

      if (i>0) {
        let randomSim =Math.floor(Math.random() * symbols.length);
        let randomSymbol = symbols.charAt(randomSim);

        generatePassword=generatePassword+randomSymbol
      }

  
    
    setPassword(generatePassword);

  }
  }
 
 
  
   

  return (
  <div className="general">
        <div className='gen'>
        <h1>Password Generator</h1>

        </div>
        
        <div className='password'>
          <p className='foo' >
            {password}
          </p>
          <img className='cop' src={Copy} alt="" />
        </div>
        <div className='main'>
          <div className='length'>
          <h3>Character Length</h3>
          <h4>{value}</h4>
          </div>
          <div className='slider'>
            <div className='green'style={getBackgroundSize()} ></div>
            <input max={20} className='slide' type="range" value={value} 
            onChange={(e) => setValue(e.target.valueAsNumber)} 
            
            
            />
          
          </div>
          <div className=' x1 '>
            <div className='same' onClick={uppercasebox}>
              {clicked ? <img src={Check} alt="" />  : null }
            </div>
            
            <h5>Include Uppercase Letters</h5>
          </div>
          <div className=' x2'>
          <div className='same'onClick={lowercasebox}>
            {low ? <img src={Check} alt="" /> : null}
          </div>
            <h5>Include Lowercase Letters</h5>

          </div>
          <div className=' x3'>
          <div className='same'onClick={numberbox}>
          {number ? <img src={Check} alt="" /> : null}
          </div>
            <h5>Include Numbers</h5>
          </div>
          <div className='x4'>
          <div className='same'onClick={symbolbox}>
          {symbol ? <img src={Check} alt="" /> : null}
          </div>
            <h5>Include Symbols</h5>
          </div>
          <div className='strength'>
            <p className='str'>STRENGTH</p>
            <p className='difficulty'>MEDIUM</p>
            <div className='boxes b1'></div>
            <div className='boxes b2'></div>
            <div className='boxes b3'></div>
            <div className='boxes b4'></div>
          </div>
          <button className='btn1'
            onClick={generate}
          >
            <p className='generate'>GENERATE</p>
            <img  className='arrow' src={Arrow} alt="" />
          </button>
        </div>
        
    </div>
  )
  }



export default App
