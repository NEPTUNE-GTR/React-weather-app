import React from "react";

//a stateless functional component
//checks first part to be true, in order for the value to be rendered out 
const Weather = (props) => 
{
    return (
        <div className = "weather__info">
            {
                props.city && props.country && <p>Location: {props.city}, {props.country}</p>
            }

            {
                props.temp && <p>Temperature(C°): {props.temp}</p>
            }

            {
                props.humidity && <p>Humidity(%):    {props.humidity}</p>
            }

            {
                props.description && <p>Current conditions:  {props.description}</p>
            }

            {
                props.error && <p className = "weather__error">Error: {props.error}</p>
            }
        </div>
    );
}

export default Weather;