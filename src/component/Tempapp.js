import React, {useState, useEffect} from "react";
import './css/style.css';

// 92cc63403a6db2c538cf9b8ce5c207c8
const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");

    useEffect(() => {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=92cc63403a6db2c538cf9b8ce5c207c8`
            const response = await fetch(url);
            const responseJson = await response.json();
            // console.log(responseJson);
            setCity(responseJson.main);
        }
        fetchApi();
    },[search])

    return (
        <>
        <div className='box'>
    
            <div className='inputData'>
                <input 
                type='search'
                // value={search}
                className='inputField'
                onChange={(event) => {
                    setSearch(event.target.value);
                }}  
                />
            </div>

        {!city ? (
            <p className="errorMsg">No Result Found</p>
        ) :

        <div className='info'>
            <h6 className='location'>
            <i className="fas fa-street-view"></i>{search}
            </h6>
            <h1 className='temp'>
               {city.temp}°Cel
            </h1>
            <h3 className='temp-min_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
        
        </div>
        }
  
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        </div>
        </>
    )
}
export default Tempapp;

