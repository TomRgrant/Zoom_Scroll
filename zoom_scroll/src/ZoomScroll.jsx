import React from "react";
import './ZoomScroll.css'

const ZoomScroll = () => {

    let num = 1

    console.log(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1")));

const scroll = (e) => {

    if (e.deltaY > 0) {
        const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
        if (currentScale + 0.1 < 2) {
          num = currentScale + 0.1;
          document.documentElement.style.setProperty("--div-scale", num.toString());

          let currentPosition = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1"))
    console.log(currentPosition);
    currentPosition = currentPosition + 5;
    document.documentElement.style.setProperty("--move-div-1", `${currentPosition.toString()}%`)

    let currentPosition2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-2"))
    console.log(currentPosition2);
    currentPosition2 = currentPosition2 + 5;
    document.documentElement.style.setProperty("--move-div-2", `${currentPosition2.toString()}%`)

    let currentPosition3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-3"))
    console.log(currentPosition3);
    currentPosition3 = currentPosition3 + 5;
    document.documentElement.style.setProperty("--move-div-3", `${currentPosition3.toString()}%`)

    let currentPosition4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-4"))
    console.log(currentPosition4);
    currentPosition4 = currentPosition4 + 5;
    document.documentElement.style.setProperty("--move-div-4", `${currentPosition4.toString()}%`)
    }
        }

if (e.deltaY < 0) {
    const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
    if (currentScale - 0.1 > 0.1) {
      num = currentScale - 0.1;
      document.documentElement.style.setProperty("--div-scale", num.toString());

      let currentPosition = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1"))
    console.log(currentPosition);
    currentPosition = currentPosition - 5;
    document.documentElement.style.setProperty("--move-div-1", `${currentPosition.toString()}%`)

    let currentPosition2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-2"))
    console.log(currentPosition2);
    currentPosition2 = currentPosition2 - 5;
    document.documentElement.style.setProperty("--move-div-2", `${currentPosition2.toString()}%`)

    let currentPosition3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-3"))
    console.log(currentPosition3);
    currentPosition3 = currentPosition3 - 5;
    document.documentElement.style.setProperty("--move-div-3", `${currentPosition3.toString()}%`)

    let currentPosition4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-4"))
    console.log(currentPosition4);
    currentPosition4 = currentPosition4 - 5;
    document.documentElement.style.setProperty("--move-div-4", `${currentPosition4.toString()}%`)
    }
    console.log('agggggggggggggggg',num);
}
}




    return(
        <>
        <div onWheel={scroll} className="float-area">
            <div className="flo-div div-1">
                <h2>This is the floating text</h2>
            </div>

            <div className="flo-div div-2">
                <h2>This is the floating text</h2>
            </div>

            <div className="flo-div div-3">
                <h2>This is the floating text</h2>
            </div>

            <div className="flo-div div-4">
                <h2>This is the floating text</h2>
            </div>
        </div>
        </>
    );
};

export default ZoomScroll;