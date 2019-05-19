import React from "react";

const iconPicker = ({condition, dt, sunrise, sunset}) => {
    if (condition.includes("cloud")){
        return "☁️";
    } else if (condition.includes("sun")) {
        return "☀️";   
    } else if (condition.includes("rain")) {
        return "🌧️";  
    } else if (condition.includes("thunder")) {
        return "⚡";   
    } else if (condition.includes("tornado")) {
        return "🌪️";  
    }  else if (condition.includes("snow")) {
        return "❄️";   
    } else if (condition.includes("partly")) {
        return "⛅";  
    } else if (condition.includes("haze") || condition.includes("fog")){
        return "🌫️";
     }else if (condition.includes("clear")) {
        if (dt >= sunrise && dt <= sunset){
            return "☀️";
        } else {
            return "🌌";
        }
    } else {
        return null;
    }
};

const Icon = ({condition, dt, sunrise, sunset}) => (
    <p>{iconPicker({condition, dt, sunrise, sunset})}</p>
);

export default Icon;