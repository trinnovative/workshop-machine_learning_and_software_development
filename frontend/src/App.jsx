import { useState } from 'react'
import axios from 'axios';
import californiaLogo from './assets/california.jpg'
import trinnovativeLogo from './assets/logo_trinnovative_white.svg'
import './App.css'


function App() {
  const [responseMessage, setResponseMessage] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      MedInc: formData.get('MedInc'),
      Latitude: formData.get('Latitude'),
      Longitude: formData.get('Longitude')
    };
    const body = JSON.stringify(data);
    axios.post('http://localhost:80/predict', body, {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        setResponseMessage(`${JSON.stringify(response.data)} $`);
      })
      .catch(error => {
        setResponseMessage(`Error: ${error.message}`);
      });
  }

  return (

    <div>

      <div className="powered-by">
        <a href="https://www.trinnovative.de/" target="_blank">
          <img className="logo" src={trinnovativeLogo} alt="Trinnovative Logo"/>
        </a>
      </div>

      <div className="intro">
        <h1>California Housing</h1>
        <img src={californiaLogo} className="california" alt="California" />
        <h3>Tell us more...</h3>
      </div>
  
      <div className="input-section">
        <form onSubmit={handleFormSubmit}>
          <label>
            median income in block group:
            <input type="text" class="input-field" name="MedInc"/>
          </label> 
          <br></br>
          <label>
            block group latitude:
            <input type="text" class="input-field" name="Latitude"/>
          </label> 
          <br></br>
          <label>
            block group longitude:
            <input type="text" class="input-field" name="Longitude"/>
          </label>
          <br></br> 
          <button type="submit">Predict</button>
        </form>
      </div>

      <div className="result">
        {responseMessage && <h3>The median house value is:</h3>}
        {responseMessage && <h2 className='result'>{responseMessage}</h2>}
        {!responseMessage && <br></br>}
        {!responseMessage && <br></br>}
        {!responseMessage && <br></br>}
        {!responseMessage && <br></br>}
        {!responseMessage && <br></br>}
      </div>

      <div className="powered-by">
        <br></br>
        <br></br>
      </div>
      
    </div>


  )
}

export default App
