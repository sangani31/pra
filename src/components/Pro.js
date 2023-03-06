import React from "react";
//import Img from "../../src/Img.jpg";
function Pro(props)
{
    return (
        <div>
            <div className="head">
            <h3>{props.name}</h3>
            <img src= {props.image}alt="img" className="imgc"></img>
            </div>
            <div className="foo">
            <p>{props.tel}</p>
            <p>{props.email}</p>
            </div>
            
           
            {/* <img src= {Img}alt="img" width="200px"></img> */}
        </div>
    )
}
export default Pro