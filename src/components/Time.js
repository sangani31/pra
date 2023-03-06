import React from "react";
function Time()
{
    const date=new Date();
    const currentTime=date.getHours();
    let m;
    if(currentTime<12){
        m="gm";
    }
    else if(currentTime<18){
        m="ge";
    }
    else{m="gn";
    }
    return <h1 className="h1">{m}</h1>
}
export default Time