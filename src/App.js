import React from "react";

import Titles from "./components/Titles.js";
import Form from   "./components/Form.js";
import Weather from "./components/Weather.js"; 

const API_WEATHER_KEY = "28f70ee442096f6acf78f287d31b4854";

class App extends React.Component
{

    //state is an object that lives within a component, is responsible to changing data within a component
    //initally all set to undefined
    state = 
    {
        error:       undefined,
        temp:        undefined,
        city:        undefined,
        country:     undefined,
        humidity:    undefined,
        description: undefined
    }

    // e is an event object in javascript
    getWeather = async (e) => {

        //this stops a full page refresh 
        e.preventDefault();

        const city     = e.target.elements.city.value;
        const country  = e.target.elements.country.value;
        const units    = 'metric'
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&units=' + units + '&appid=' + API_WEATHER_KEY);
        const data     = await api_call.json();
        
        console.log(data); 

        //should never directly manipulate the state, instead use setState
        this.setState({
            temp:        data.main.temp,
            city:        data.name,
            country:     data.sys.country,
            humidity:    data.main.humidity,
            description: data.weather[0].description,
            error: ''
        })
    }
    render()
    {
        return (
            <div>
                <Titles/>
                <Form getWeather = {this.getWeather }/>

                <Weather 
                temp = {this.state.temp}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
                />
            </div>
        );
    }
};

export default App;