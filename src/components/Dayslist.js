import React from "react";
import Card from "./Card";
// import day from "../Data/day.json";

const day = [
    {
        "day": 0,
        "temp": 68,
        "image": "https://e7.pngegg.com/pngimages/718/967/png-clipart-windy-cloud-weather-forecasting-wind-text-cloud-thumbnail.png",
        "message": "WINDY"

    },
    {
        "day": 1,
        "temp": 74,
        "image": "https://w7.pngwing.com/pngs/116/940/png-transparent-sun-weather-weather-forecast-sunny-sunshine-forecast-cloudless-warm-summer-shining.png",
        "message": "SUNNY"

    },
    {
        "day": 2,
        "temp": 68,
        "image": "https://w7.pngwing.com/pngs/585/784/png-transparent-thunderstorm-cloud-rain-storm-heart-ant-storm.png",
        "message": "STROM"

    },
    {
        "day": 3,
        "temp": 68,
        "image": "https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-sunny-icon-png-image_450296.jpg",
        "message": "MOSTLY CLOUDY"

    },
    {
        "day": 4,
        "temp": 82,
        "image": "https://cdn-icons-png.flaticon.com/512/5501/5501914.png",
        "message": "PARTLY CLOUDY"

    },
    {
        "day": 5,
        "temp": 81,
        "image": "https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.png",
        "message": "RAIN"

    },
    {
        "day": 6,
        "temp": 90,
        "image": "https://w7.pngwing.com/pngs/116/940/png-transparent-sun-weather-weather-forecast-sunny-sunshine-forecast-cloudless-warm-summer-shining.png",
        "message": "SUNNY"

    }
]


const Dayslist = ({to, from}) => {
    // console.log(to);
    // console.log(from);
    // console.log("hello Dayslist");      
    // const dates = day;
    // console.log(dates);
    
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dt = new Date(from);
    const dayIndex = dt.getDay();
    

    const cardArray = day.map((i)=> {
        return <Card 
                    
                id = {i} 
                day ={dayNames[(i.day+dayIndex ) % 7]} 
                temp={i.temp}
                img = {i.image}
                message = {i.message}/>
    });
    return(
        <div className=" center"
        style={{display: 'flex', flexDirection: 'row'}}>
            
            {cardArray}
        </div>
    );    
}

export default Dayslist;