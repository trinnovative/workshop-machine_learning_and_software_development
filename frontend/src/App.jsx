import { useState } from 'react'
import californiaLogo from './assets/california.jpg'
import trinnovativeLogo from './assets/logo_trinnovative_white.svg'
import predict from './service'
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
    predict(data)
      .then(response => {
        setResponseMessage(`${JSON.stringify(response.data)} $`);
      })
      .catch(error => {
        setResponseMessage(`Error: ${error.message}`);
      });
  }

  return (

    <div className="App">

      <div className="powered-by">
        <a href="https://www.trinnovative.de/">
          <img className="logo" src={trinnovativeLogo} alt="Trinnovative" />
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
