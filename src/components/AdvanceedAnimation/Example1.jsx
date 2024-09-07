import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

console.clear();

import "./example1.css";

function Box({ children, timeline, index }) {
  const el = useRef();

  useGSAP(() => {
    // add 'left 100px' animation to timeline
    timeline &&
      timeline.to(
        el.current,
        {
          x: -100,
        },
        index * 0.1
      );
  }, [timeline, index]);

  return (
    <div className="box gradient-green" ref={el}>
      {children}
    </div>
  );
}

function Circle({ children, timeline, index, rotation }) {
  const el = useRef();

  useGSAP(() => {
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline &&
      timeline.to(
        el.current,
        {
          rotation: rotation,
          x: 100,
        },
        index * 0.1
      );
  }, [timeline, rotation, index]);

  return (
    <div className="circle gradient-blue" ref={el}>
      {children}
    </div>
  );
}

function Example1() {
  const [tl, setTl] = useState();

  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  });

  const toggleTimeline = contextSafe(() => {
    tl.reversed(!tl.reversed());
  });

  return (
    <section className="app">
      <button onClick={toggleTimeline}>Toggle</button>
      <Box timeline={tl} index={0}>
        Box
      </Box>
      <Circle timeline={tl} rotation={360} index={1}>
        Circle
      </Circle>
    </section>
  );
}

export default Example1;
