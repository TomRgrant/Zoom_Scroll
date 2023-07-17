import React from "react";
import './ZoomScroll.css'

const ZoomScroll = () => {

    let num = 1


const scroll = (e) => {
    if (e.deltaY > 0) {
        const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
        if (currentScale + 0.1 < 2) {
          num = currentScale + 0.1;
          document.documentElement.style.setProperty("--div-scale", num.toString());
        }
      }

if (e.deltaY < 0) {
    const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
    if (currentScale - 0.1 > 0.1) {
      num = currentScale - 0.1;
      document.documentElement.style.setProperty("--div-scale", num.toString());
    }
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