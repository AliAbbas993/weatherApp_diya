import { useEffect, useState } from 'react';
import InitialScreen from './components/InitialScreen';
import DataScreen from './components/DataScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  const [city , setCity] = useState();
  const [showSelect , setShowSelect] = useState(false);

  const handleCityChange = (e) => {
    console.log(e.target.value , "city val");
    setCity(e.target.value);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            {city ? 
              <DataScreen city={city} setCity={setCity}/>
            : 
              <InitialScreen showSelect={showSelect} setShowSelect={setShowSelect} handleCityChange={handleCityChange}/>
            }
          </div>
        </div>      
      </div>
    </div>
  );
}

export default App;
