import bg from './darth-vader-bg.jpeg';
import './App.css';
import swlogo from './star-wars-4.svg'
import { Component } from 'react';
import SWTable from './SWTable';

function BackgroundImage(){
  return(
    <img src={bg} className="img-fluid" alt="Responsive Background" name="background" />
  )
}

function StarWarsLogo(){
  return(
    <img src={swlogo} className='sw-svg' alt='logo'/>
  )
}

class App extends Component {
  render(){
    return(
      <div className='background-image'>
        <BackgroundImage /> 
      <div className='container'>
      
        <div className='star-wars-logo'>
          <StarWarsLogo />
          <div className='table'>
          <SWTable />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default App;
