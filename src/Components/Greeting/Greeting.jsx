import React from "react";
import './Greeting.css';
import winner from '../../../public/winner.svg'

function Greeting(props) {
    return (
        <div class="sayhi-user">
            <div class="sayhi-user-text">
                <h3 className="sayhi-title">Hi! <strong className="name"> Pecky</strong></h3>
                <p className="sayhi-description">
                    Plan your days to be more productive,you have 4 daily recommend to complete today.
                </p>
            </div>
            <div class="reward-image">
                <img src= {winner}/>
            </div>
        </div>
    );
}

export default Greeting;