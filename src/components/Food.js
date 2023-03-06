import React from "react";
import './Food.css'

function Food()
{
    const name="chikky";
    const na="dh";
    const img="https://picsum.photos/200";
    const currentDate=new Date();
    const year =currentDate.getFullYear();
    console.log(currentDate)
    return <div className="food">
        <h1 className="h1" contentEditable="true" spellCheck="false">fav food</h1>
        <img src={img+ "?greyscale"} alt="bhdch"></img>
        <img src={img+ "?greyscale"} alt="bhdch"></img>
        <img src={img+ "?greyscale"} alt="bhdch"></img>
        <ul>
            <li>{name+" " +na}</li>
            <li>{year}</li>
            <li>jjs</li>
        </ul>
        <h1 style={{color:"red"}}>helloooooo</h1>
    </div>
}
export default Food