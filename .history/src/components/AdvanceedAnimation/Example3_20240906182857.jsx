import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
  createContext,
} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// React Context - not GSAP Context
const SelectedContext = createContext();

function Box({ children, id }) {
  const el = useRef();
  // React Context - not GSAP Context
  const { selected } = useContext(SelectedContext);

  useGSAP(() => {
    gsap.to(el.current, {
      x: selected === id ? 200 : 0,
    });
  }, [selected, id]);

  return (
    <div className="box gradient-blue" ref={el}>
      {children}
    </div>
  );
}

function Boxes() {
  return (
    <div className="boxes">
      <Box id="1">Box 1</Box>
      <Box id="2">Box 2</Box>
      <Box id="3">Box 3</Box>
    </div>
  );
}

function Menu() {
  // React Context - not GSAP Context
  const { selected, setSelected } = useContext(SelectedContext);

  const onChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="menu">
      <label>
        <input
          onChange={onChange}
          checked={selected === "1"}
          type="radio"
          value="1"
          name="selcted"
        />{" "}
        Box 1
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === "2"}
          type="radio"
          value="2"
          name="selcted"
        />{" "}
        Box 2
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === "3"}
          type="radio"
          value="3"
          name="selcted"
        />{" "}
        Box 3
      </label>
    </div>
  );
}

function Example5() {
  const [selected, setSelected] = useState("2");

  return (
    <section className="app">
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <Menu />
        <Boxes />
      </SelectedContext.Provider>
    </section>
  );
}
export default Example5;
