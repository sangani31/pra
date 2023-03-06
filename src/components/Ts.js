import React,{useState} from "react";
function Ts()
{
    setInterval(update,1000)
    const now=new Date().toLocaleTimeString();
    const [time,set]=useState(now)
    function update(){
        const t=new Date().toLocaleTimeString();
        set(t);
    }
    return (
        <div>
            <h2>{time}</h2>
            <button onClick={update}>get time</button>
        </div>
    )
}
export default Ts