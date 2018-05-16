import React from "react";


class Weather extends React.Component
{
    render()
    {
        // only display 'Location' string if props.city and props.country are true, and same for 'temperature', 'humidity', and 'conditions'
        return(
            <div>
                {this.props.city && this.props.country && <p>Location:    {this.props.city}, {this.props.country}</p>}
                {this.props.temp                       && <p>Temperature: {this.props.temp}</p>}
                {this.props.humidity                   && <p>Humidity:    {this.props.humidity}</p>}
                {this.props.description                && <p>Conditions:  {this.props.description}</p>}

                {this.props.error                      && <p>Error:       {this.props.error}</p>}
            </div>
        );
    }
}


export default Weather;