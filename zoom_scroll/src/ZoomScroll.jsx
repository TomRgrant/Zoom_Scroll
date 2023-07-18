import React from "react";
import './ZoomScroll.css';

const ZoomScroll = () => {
    let num = 1;
    const moveAmount1 = 5;
    const moveAmount2 = 3;
    const moveAmount3 = 7;
    const moveAmount4 = 8;

    console.log(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1-x")));

    const scroll = (e) => {
        if (e.deltaY > 0) {
            const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
            if (currentScale + 0.1 < 2) {
                num = currentScale + 0.1;
                document.documentElement.style.setProperty("--div-scale", num.toString());

                updatePosition(1, moveAmount1, true);
                updatePosition(2, moveAmount2, false);
                updatePosition(3, moveAmount3, true);
                updatePosition(4, moveAmount4, false);
            }
        }

        if (e.deltaY < 0) {
            const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
            if (currentScale - 0.1 > 0.1) {
                num = currentScale - 0.1;
                document.documentElement.style.setProperty("--div-scale", num.toString());

                updatePosition(1, -moveAmount1, true);
                updatePosition(2, -moveAmount2, false);
                updatePosition(3, -moveAmount3, true);
                updatePosition(4, -moveAmount4, false);
            }
        }
    }

    const updatePosition = (divNumber, moveAmount, isXAxis) => {
        let currentPositionX = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--move-div-${divNumber}-x`));
        let currentPositionY = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--move-div-${divNumber}-y`));

        if (isXAxis) {
            currentPositionX += moveAmount;
        } else {
            currentPositionY += moveAmount;
        }

        document.documentElement.style.setProperty(`--move-div-${divNumber}-x`, `${currentPositionX}%`);
        document.documentElement.style.setProperty(`--move-div-${divNumber}-y`, `${currentPositionY}%`);
    }

    return (
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
