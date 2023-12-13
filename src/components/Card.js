import React from "react";
import './Card.css';

const Card = (props) =>{
    console.log(props.day)  
    return(
        <div className=" card ba dib pa2 ph3 bg-light-green " style={{ width: 100 }}> 
            <div>
                <h3>{props.day}</h3>
                <p>{props.temp}</p>
                <img src={props.img}/>
                <p>{props.message}</p>
            </div>
        </div>
    );

}

export default Card;