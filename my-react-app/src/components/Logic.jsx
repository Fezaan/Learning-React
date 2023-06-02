import React from "react";

const date = new Date();
const time = date.getHours();
let greeting="";

const obj = {
  color: "blue",
  fontSize: "40px",
  border: "1px dotted green",
};

export default function Logic(){
    if (time >= 5 && time < 11) {
        obj.color="orange";
        greeting="Good Morning";
    } else if (time >= 11 && time < 16) {
        obj.color="yellow";
        greeting="Good Afternoon";
    } else if (time >= 16 && time < 19) {
        obj.color= "red";
        greeting="Good Evening";
    } else {
        greeting="Good Night";
    }
    return(<><h1 className="heading" style={obj}>{greeting}</h1></>)
}