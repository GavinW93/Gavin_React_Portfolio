import React from 'react';
import './Maincontainer2.css';
{/* <img src={require('./logo.jpeg')} /> */}
const postup = require('../images/post-up.png'); 
const police = require('../images/Screen Shot 2019-11-11 at 10.23.52 PM.png');
const codequiz = require('../images/Screen Shot 2019-11-11 at 10.37.35 PM.png');
const notetaker = require('../images/note_taker.png');
const weather = require('../images/Screen Shot 2019-11-11 at 10.30.26 PM.png');
const wordguess = require('../images/Screen Shot 2019-11-11 at 10.03.09 PM.png');
export default class Maincontainer2 extends React.Component {
    render(){
      return(
      <div id="main-container2" class="container">
      <section class="main-section">
        <h1>Portfolio</h1>
        <h3>click on the images to launch applications</h3>

        <div class="work">
  
          <a href="https://postup-cards.herokuapp.com/">
          <img src={postup} />
            </a>
        <a href="https://github.com/TwistedPixels/PostUp-Cards"><h3>Project 2 GitHub</h3></a>
        
          </div>
  
        <div class="work">
  
            <a href="https://andydurette.github.io/UFT-Project-1/">
            <img src={police} />  
              </a>
          <a href="https://github.com/andydurette/UFT-Project-1"><h3>Project 1 GitHub</h3></a>
          
            </div>
       
            
  
        <div class="work">
          
          
            <a href="https://gavinw93.github.io/Code-Quiz/">
            {/* <img border="0" alt="W3Schools" src="assets/images/Screen Shot 2019-11-11 at 10.37.35 PM.png"> */}
            <img src={codequiz} /> 
            </a>
  
          <a href="https://github.com/GavinW93/Code-Quiz"><h3>Quiz Game GitHub</h3></a>
          
  
          
        </div>
        <div class="work">
          
          
          <a href="https://note-taker-gavinw93.herokuapp.com/">
          {/* <img border="0" alt="W3Schools" src="assets/images/note_taker.png"> */}
          <img src={notetaker} /> 
          </a>

        <a href="https://github.com/GavinW93/Note-Taker"><h3>note taker GitHub</h3></a>
        

        
      </div>
        
        <div class="work">
          
          <a href="https://gavinw93.github.io/WeatherDashBoard/">
            {/* <img border="0" alt="W3Schools" src="assets/images/Screen Shot 2019-11-11 at 10.30.26 PM.png"> */}
            <img src={weather} />
            </a>
  
  
  
          <a href="https://github.com/GavinW93/WeatherDashBoard"> <h3>WeatherDashBoard GitHub</h3></a>
          
        </div>
      
        <div class="work">
  
  
            <a href="https://gavinw93.github.io/Gavin-s-Word-Guess/">
              {/* <img border="0" alt="W3Schools" src="assets/images/Screen Shot 2019-11-11 at 10.03.09 PM.png"height= 200px> */}
              <img src={wordguess} />
              </a>
  
          <a href="https://github.com/GavinW93/Gavin-s-Word-Guess"><h3>Word Guess GitHub</h3></a>
  
          
        </div>
  
  
      </section>
  
    </div>
      )   
        
    }
}


        