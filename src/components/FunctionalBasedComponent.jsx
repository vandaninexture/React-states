import React from "react";
import { useState } from "react";
import Movie from "../b2.jpeg";

const FunctionalBasedComponent = () => {

    /* create two useState for ticket & price & define default as zero value */
    const [ ticket, setTicket ] = useState(0);
    const [ price,setPrice ] = useState(0);

    /* define handleCLick function to update the ticket & price value */
    function handleClick() {
        setTicket(ticket + 1);
        setPrice(price + 50);
    }

    /* rendering the UI */
    return (
        <div>
            <img src={Movie} alt="logo" /><br />
            <button onClick={handleClick}>Add Ticket</button> {ticket}
            <div>Total Price: {price}</div>
        </div>
    );
}

export default FunctionalBasedComponent;