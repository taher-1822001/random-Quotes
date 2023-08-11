import React, { Component } from 'react'


class GreetAgain extends Component
{
    constructor(props)
    {
        super(props)
        {

        }
    }
    render()
    {
        return(
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

export default GreetAgain