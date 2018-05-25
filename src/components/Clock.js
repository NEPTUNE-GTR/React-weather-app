import React from "react";
class Clock extends React.Component 
{
    //constructor that assigns the initial state 'this.state'
    constructor(props) 
    {
        super(props);
        this.state = {date: new Date()};
    }

    /////////////////life cycle hooks\\\\\\\\\\\\\\\\\\\
    //componentDidMount hook runs after the component has need rendered to the DOM
    componentDidMount()
    {
        this.timerID = setInterval( () => this.tick(), 1000 )
    }
    //clear the timer in the componentWillUnmount lifecycle hook
    componentWillUnmount()
    {
        clearInterval(this.timerID)
    }
    tick()
    {
        this.setState({
            date: new Date()
        });
    }
    render() 
    {
        return (
            <div className = "clock">
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
export default Clock;