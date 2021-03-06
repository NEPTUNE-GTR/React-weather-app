import React from "react";


//a stateless functional component
const Form = (props) =>
{
    return(
        <form onSubmit = {props.getWeather}>
            <input type = "text" name = "city" placeholder = "city..."/>
            <input type = "text" name = "country" placeholder = "country..."/>
            <button className = "button">Get weather</button>
        </form>
    );
}

export default Form;


