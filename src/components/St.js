import React,{useState} from "react";



function St(){
    const [cs,csl]=useState(0)
    const fun=()=>{
    csl(cs+2)
}
    return (
        <div>
            <center>
            <h2>{cs}</h2>
            <button onClick={fun}>+</button>
            </center>
        </div>
    )
}

export default St