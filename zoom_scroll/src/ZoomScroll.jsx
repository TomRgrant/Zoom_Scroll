import React from "react";
import './ZoomScroll.css';

const ZoomScroll = () => {
  let num = 1;

  const moveAmountX1 = -5;
  const moveAmountY1 = 8;

  const moveAmountX2 = 10;
  const moveAmountY2 = -6;

  const moveAmountX3 = 3;
  const moveAmountY3 = 7;

  const moveAmountX4 = 9;
  const moveAmountY4 = 2;

  const scroll = (e) => {
    if (e.deltaY > 0) {
      const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
      if (currentScale + 0.1 < 2) {
        num = currentScale + 0.1;
        document.documentElement.style.setProperty("--div-scale", num.toString());

        let currentPositionX1 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1-x"));
        let currentPositionY1 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1-y"));

        currentPositionX1 = currentPositionX1 + moveAmountX1;
        currentPositionY1 = currentPositionY1 + moveAmountY1;

        document.documentElement.style.setProperty("--move-div-1-x", `${currentPositionX1.toString()}%`);
        document.documentElement.style.setProperty("--move-div-1-y", `${currentPositionY1.toString()}%`);

        let currentPositionX2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-2-x"));
        let currentPositionY2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-2-y"));

        currentPositionX2 = currentPositionX2 + moveAmountX2;
        currentPositionY2 = currentPositionY2 + moveAmountY2;

        document.documentElement.style.setProperty("--move-div-2-x", `${currentPositionX2.toString()}%`);
        document.documentElement.style.setProperty("--move-div-2-y", `${currentPositionY2.toString()}%`);

        let currentPositionX3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-3-x"));
        let currentPositionY3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-3-y"));

        currentPositionX3 = currentPositionX3 + moveAmountX3;
        currentPositionY3 = currentPositionY3 + moveAmountY3;

        document.documentElement.style.setProperty("--move-div-3-x", `${currentPositionX3.toString()}%`);
        document.documentElement.style.setProperty("--move-div-3-y", `${currentPositionY3.toString()}%`);

        let currentPositionX4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-4-x"));
        let currentPositionY4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-4-y"));

        currentPositionX4 = currentPositionX4 + moveAmountX4;
        currentPositionY4 = currentPositionY4 + moveAmountY4;

        document.documentElement.style.setProperty("--move-div-4-x", `${currentPositionX4.toString()}%`);
        document.documentElement.style.setProperty("--move-div-4-y", `${currentPositionY4.toString()}%`);
      }
    }

    if (e.deltaY < 0) {
      const currentScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--div-scale"));
      if (currentScale - 0.1 > 0.1) {
        num = currentScale - 0.1;
        document.documentElement.style.setProperty("--div-scale", num.toString());

        let currentPositionX1 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1-x"));
        let currentPositionY1 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-1-y"));

        currentPositionX1 = currentPositionX1 - moveAmountX1;
        currentPositionY1 = currentPositionY1 - moveAmountY1;

        document.documentElement.style.setProperty("--move-div-1-x", `${currentPositionX1.toString()}%`);
        document.documentElement.style.setProperty("--move-div-1-y", `${currentPositionY1.toString()}%`);

        let currentPositionX2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-2-x"));
        let currentPositionY2 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-2-y"));

        currentPositionX2 = currentPositionX2 - moveAmountX2;
        currentPositionY2 = currentPositionY2 - moveAmountY2;

        document.documentElement.style.setProperty("--move-div-2-x", `${currentPositionX2.toString()}%`);
        document.documentElement.style.setProperty("--move-div-2-y", `${currentPositionY2.toString()}%`);

        let currentPositionX3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-3-x"));
        let currentPositionY3 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-3-y"));

        currentPositionX3 = currentPositionX3 - moveAmountX3;
        currentPositionY3 = currentPositionY3 - moveAmountY3;

        document.documentElement.style.setProperty("--move-div-3-x", `${currentPositionX3.toString()}%`);
        document.documentElement.style.setProperty("--move-div-3-y", `${currentPositionY3.toString()}%`);

        let currentPositionX4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-4-x"));
        let currentPositionY4 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--move-div-4-y"));

        currentPositionX4 = currentPositionX4 - moveAmountX4;
        currentPositionY4 = currentPositionY4 - moveAmountY4;

        document.documentElement.style.setProperty("--move-div-4-x", `${currentPositionX4.toString()}%`);
        document.documentElement.style.setProperty("--move-div-4-y", `${currentPositionY4.toString()}%`);
      }
    }
  };

  return (
    <>
      <div onWheel={scroll} className="float-area">
        <div className="flo-div div-1">
          <h2>This is the floating text 1</h2>
        </div>

        <div className="flo-div div-2">
          <h2>This is the floating text 2</h2>
        </div>

        <div className="flo-div div-3">
          <h2>This is the floating text 3</h2>
        </div>

        <div className="flo-div div-4">
          <h2>This is the floating text 4</h2>
        </div>
      </div>
    </>
  );
};

export default ZoomScroll;
