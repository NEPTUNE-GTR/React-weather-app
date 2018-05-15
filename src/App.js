import React from "react";

import Titles from "./components/Titles.js";
import Form from   "./components/Form.js";
import Weather from "./components/Weather.js"; 

const API_WEATHER_KEY = "28f70ee442096f6acf78f287d31b4854";

class App extends React.Component
{
    getWeather = async () => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&units=imperial&appid=' + API_WEATHER_KEY);
        const data     = await api_call.json();
        
        
    }
    render()
    {
        return (
            <div>
                <Titles/>
                <Form/>
                <Weather/>
            </div>
        );
    }
};

export default App;