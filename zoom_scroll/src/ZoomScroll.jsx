import React from "react";
import './ZoomScroll.css'

const ZoomScroll = () => {

    let num = 1

const scroll = (e) => {
    console.log(num);
    document.documentElement.style.setProperty("--div-scale", num);
    if (e.deltaY > 0){
        num = num + 0.1;
    } else {
        num = num - 0.1;
    }
}


    return(
        <>
        <div onWheel={scroll} className="float-area">
            <div className="flo-div">
                <h2>This is the floating text</h2>
            </div>

            <div className="flo-div">
                <h2>This is the floating text</h2>
            </div>

            <div className="flo-div">
                <h2>This is the floating text</h2>
            </div>

            <div className="flo-div">
                <h2>This is the floating text</h2>
            </div>
        </div>
        </>
    );
};

export default ZoomScroll;