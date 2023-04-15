import React, {useState} from 'react';

function Title() {
    const today = new Date();
    const date = today.getDate();
    const options = { month: 'long' };
    const monthName = today.toLocaleString('default', options);
     
    const [selectedCity, setSelectedCity] = useState('');
      
    const handleChange = (event) => {
      setSelectedCity(event.target.value);
    }
    return (
        <>
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
        </>
    )
}

export default Title;