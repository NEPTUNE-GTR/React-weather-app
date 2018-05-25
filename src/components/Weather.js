import React from "react";

//a stateless functional component
//checks first part to be true, in order for the value to be rendered out 
const Weather = (props) => 
{
    return (
        <div className = "weather__info">
            {
                props.city && props.country && 
                <p className = "weather__key">Location: 
                    <span className = "weather__value">{props.city}, {props.country}</span>
                </p>
            }

            {
                props.temp && 
                <p className = "weather__key">Temperature(C°):
                    <span className = "weather__value">{props.temp}</span>
                </p>
            }

            {
                props.humidity && 
                <p className = "weather__key">Humidity(%):    
                    <span className = "weather__value">{props.humidity}</span>
                </p>
            }

            {
                props.description && 
                <p className = "weather__key">Current conditions:
                    <span className = "weather__value">{props.description}</span>
                </p>
            }

            {
                props.error && <p className = "weather__error">Error: {props.error}</p>
            }
        </div>
    );
}

export default Weather;