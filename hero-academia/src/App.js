import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

  //Functions 

  //Render - Contains elements and lifted state
  render() {
    return(
    
      <div>
        <div style={{backgroundColor: "black"}}>
          <img alt="Hero Academia Logo" src={require("./assets/images/herologo-1.png")}></img>
        </div>
        <div style={{backgroundColor: "black"}}>
          <span style={{color: "white"}}>"Coming Soon"</span>
        </div>
        
      </div>
    )
  }
}
export default App;
