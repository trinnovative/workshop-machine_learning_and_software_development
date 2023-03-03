import { useState } from 'react'
import californiaLogo from './assets/california.jpg'
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
      <img src={californiaLogo} className="logo" alt="California" />

      <h1>California Housing</h1>

      <h3>Tell us more...</h3>

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
          <button type="submit">Predict Price</button>
        </form>
      </div>

      <div>
        {responseMessage && <h3>The median house value is:</h3>}
        {responseMessage && <h2 className='result'>{responseMessage}</h2>}
      </div>
      
    </div>
  )
}

export default App
