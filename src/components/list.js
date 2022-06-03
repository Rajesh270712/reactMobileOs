import React from "react";

function OSList(){
    return (
        <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>
    )
}
function Manufacture(){
    return (
        <ul type="square">
            <li>SamSung</li>
            <li>HTC</li>
            <li type="disc">Micromax</li>
            <li type="circle">Apple</li>
        </ul>
    )
}

export { OSList,Manufacture} 