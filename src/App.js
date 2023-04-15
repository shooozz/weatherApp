import './index.css';
import React, {useState} from 'react';
import iconMain from './main-icon.png';
import iconCold from './icon-cold.png';


function App() {

  const today = new Date();
  const date = today.getDate();
  const options = { month: 'long' };
  const monthName = today.toLocaleString('default', options);
  console.log(today)
   
  const [selectedCity, setSelectedCity] = useState('');
  
    
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className='title'>
          <h1>Moscow</h1>
        </div>
        <div className='info'>
          <div className='info-date'>
            <p>{date} {monthName}</p>
          </div>
          <div className='info-city'>
            <select value={selectedCity} onChange={handleChange}>
              <option value="">Enter city...</option>
              <option value="Moscow">Москва</option>
              <option value="St.Petersburg">Санкт-Петербург</option>
              <option value="Kazan">Казань</option>
              <option value="Novosibirsk">Новосибирск</option>
              <option value="Yekaterinburg">Екатеринбург</option>
              <option value="Grozny">Грозный</option>
            </select>
          </div>
        </div>
        <div className='main'>
          <div className='main-bg'>
            <button className='main-button'>
              <img src={iconMain} alt='icon'/>
              <p>7°F</p>
            </button>
          </div>
        </div>
        <div className='status'>
          <div className='status-icon'><img src={iconCold}/></div>
          <div className='status-inline'><p>cool{}</p></div>
        </div>
        <div className='footer'>
          <button className='button'>Get weather</button>
        </div>
      </div>
    </div>
  );
}

export default App;
