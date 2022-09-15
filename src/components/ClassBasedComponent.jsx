import React from "react";
import { Component } from "react";
import Movie from '../b1.jpeg';

export default class MovieTicket extends Component{
    constructor(props){
        super(props);

        /* define state */
        this.state = {
            /* tickets and price as state of property's object */
            ticket: 0,
            price: 0
        };

        /* bind to the handleClick function */
        this.handleClick = this.handleClick.bind(this);
    }

    /* updating the ticket & price  */
    handleClick() {
        /* setState function allow to update the value of state */
        this.setState((prevState) => {
            /* prevState :: if i want to change the state of a component based on the previous state of that component so, 
                    we use setState(), which provide us the prevState */
            return {
                ticket: prevState.ticket + 1,
                price: prevState.price + 50,
            };
        });

        console.log("Movie Tickets", this.state.ticket);
    }

    /* rendering the UI */
    render() {
        /* create const for ticket counts & price total */ 
        const { ticket, price }  = this.state;

        return (
            <div>
                <img src={Movie} alt="logo" /><br />
                <button onClick={this.handleClick}>Add Ticket</button> {ticket}
                <div>Total Price: {price}</div>
            </div>
        );
    }
}
