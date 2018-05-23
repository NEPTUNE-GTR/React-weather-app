import React from "react";

import Titles  from "./components/Titles.js";
import Form    from "./components/Form.js";
import Weather from "./components/Weather.js";
import Clock   from "./components/Clock.js"; 

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
        
        //check to see if city and county 
        if(city && country)
        {
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
        else
        {
            this.setState({
                temp:        undefined,
                city:        undefined,
                country:     undefined,
                humidity:    undefined,
                description: undefined,
                error: 'Please enter a city and country'
            })

        }
    }
    render()
    {
        return (
            <div>
                <div className = "wrapper">
                    <div className = "main">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-xs-4 title-container">
                                    <Titles/>
                                </div>

                                <div className = "col-xs-6 form-container">
                                    <Clock/>
                                    <Form getWeather = {this.getWeather }/>

                                    <Weather 
                                        temp        = {this.state.temp}
                                        city        = {this.state.city}
                                        country     = {this.state.country}
                                        humidity    = {this.state.humidity}
                                        description = {this.state.description}
                                        error       = {this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;