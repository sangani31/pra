import React from "react";
import Inf from "./inf";
const v=[{
    ti:"prathyusha",
    d:"You can now view prathyusha in the browser  http://localhost:3000 Note that the development build is not optimized.To create a production build, use npm run build."
},
{
    ti:"prathyusha",
    d:"You can now view prathyusha in the browser  http://localhost:3000 Note that the development build is not optimized.To create a production build, use npm run build."
},
{
    ti:"prathyusha",
    d:"You can now view prathyusha in the browser  http://localhost:3000 Note that the development build is not optimized.To create a production build, use npm run build."
},]
// function x(v){
//     return (
        
//     )
// }
function Note(props){
    return (
        <div className="bs">
            {/* <p>{this is tit}</p>
            <p>this is content</p> */}
            {v.map((x)=>(<Inf ti={x.ti}/>))}
        </div>
    )
}
export  default Note