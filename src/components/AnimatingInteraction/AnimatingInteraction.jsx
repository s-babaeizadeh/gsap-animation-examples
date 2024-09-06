import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "./animatingInteraction.css";

const AnimatingInteraction = () => {
  const { contextSafe } = useGSAP();
  const container = useRef();

  const onEnter = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  return (
    <div className="app flex-row">
      <div className="box gradient-blue" onClick={onEnter}>
        Click Me
      </div>
    </div>
  );
};

export default AnimatingInteraction;
