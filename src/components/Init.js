// import React, { useMemo, useState, useEffect } from "react";
// import P5Wrapper from "react-p5-wrapper";
// import sketchInit from "../sketches/MouseFollowDraw";
// import "../../src/App.css";

// function Init() {
//   //   const sketch = useMemo(() => sketchInit(600, 400), []);
//   const [sketch, setSketch] = useState(null);
//   useEffect(() => {
//     const width = document.getElementById("test").offsetWidth;
//     setSketch(() => sketchInit(width, width));
//   }, []);

//   return (
//     <div id="test" className="sketch">
//       {sketch && <P5Wrapper sketch={sketch} />}
//     </div>
//   );
// }

// export default Init;
