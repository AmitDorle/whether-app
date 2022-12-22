import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [city, setCity] = useState("Bhandara");
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState('');
  const [description, setDescription] = useState('');

  // async function loadData()
  // {
  //     const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
  //     if(response == 200)
  //     {
  //       setTemp(response.data.main)
  //     }
  // }

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=701dece5fc7a948100a160ee07e89f9c`
      );

      
      const tempCel = Math.round(response.data.main.temp - 273.15);
      setTemp(`${tempCel} °C`);

      
      setHumidity(`${response.data.main.humidity} %`);

    
      setDescription(response.data.weather[0].description);
    }

    loadData();
  }, [city]);

  return (
    <div>
      <h1 className="app-title">WEATHER APP</h1>
      
      <div className="search-city-container">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter City Name"
          className="input-box"
        />
      </div>
      <div className="Show-box-container">
        <div className="show-box">
          <h3>{city}</h3>
        </div>
        <div className="show-box">
          <h3>{temp}</h3>
        </div>
      </div>
      <div className="Show-box-container">
        <div className="show-box">
          <h3>{humidity}</h3>
        </div>
        <div className="show-box">
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
