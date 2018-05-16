import React from "react";


class Weather extends React.Component
{
    render()
    {
        return(
            <div>
                {this.props.temp}
            </div>
        );
    }
}


export default Weather;