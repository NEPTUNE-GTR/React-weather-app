import React from "react";

//a stateless functional component
const Weather = (props) => 
{
    return (
        <div>
            {props.city && props.country && <p>Location:    {props.city}, {props.country}</p>}
            {props.temp                       && <p>Temperature(C°): {props.temp}</p>}
            {props.humidity                   && <p>Humidity(%):    {props.humidity}</p>}
            {props.description                && <p>Current conditions:  {props.description}</p>}

            {props.error                      && <p>Error:       {props.error}</p>}
        </div>
    );
}

export default Weather;