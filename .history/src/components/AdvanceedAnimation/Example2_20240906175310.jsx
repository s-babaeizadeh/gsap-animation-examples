import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./example4.css";

console.clear();

function Box({ children, addAnimation, index }) {
  const el = useRef();

  useGSAP(() => {
    console.log("Box effect");
    const animation = gsap.to(el.current, { x: -200 });
    addAnimation(animation, index);
  }, [addAnimation, index]);

  return (
    <div className="box gradient-green" ref={el}>
      {children}
    </div>
  );
}

function Circle({ children, addAnimation, index, rotation }) {
  const el = useRef();

  useGSAP(() => {
    console.log("Circle effect");
    const animation = gsap.to(el.current, { rotate: rotation, x: 200 });
    addAnimation(animation, index);
  }, [addAnimation, index]);

  return (
    <div className="circle gradient-blue" ref={el}>
      {children}
    </div>
  );
}

function Example4() {
  const [tl, setTl] = useState();

  const { contextSafe } = useGSAP(() => {
    console.log("App effect (create timeline)");
    const tl = gsap.timeline();
    setTl(tl);
  });

  const addAnimation = useCallback(
    (animation, index) => {
      tl && tl.add(animation, index * 0.1);
    },
    [tl]
  );

  const toggleTimeline = contextSafe(() => {
    console.log("toggle");
    tl && tl.reversed(!tl.reversed());
  });

  return (
    <div className="app">
      <button onClick={toggleTimeline}>Toggle</button>
      <Box addAnimation={addAnimation} index={0}>
        Box
      </Box>
      <Circle addAnimation={addAnimation} index={1} rotation="360">
        Circle
      </Circle>
    </div>
  );
}
export default Example4;
