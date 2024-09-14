import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

console.clear();

function ExitAnimations() {
  const container = useRef();
  const [active, setActive] = useState(true);

  const { contextSafe } = useGSAP({ scope: container });

  const remove = contextSafe(() => {
    gsap.to(".box", {
      opacity: 0,
      onComplete: () => setActive(false),
    });
  });

  return (
    <div className="app" ref={container}>
      <button className="button" onClick={() => active && remove()}>
        {active ? "Remove Box" : "Done"}
      </button>
      {active ? <div className="box gradient-blue">Box</div> : null}
    </div>
  );
}

export default ExitAnimations;
