import { useRef } from "react";

const ProblemFocusFix = () => {
  const inputRef = useRef(null);

  const onFocusToggle = () => {
    console.log(inputRef.current);
    if (!inputRef.current) return;
    inputRef.current.focus();
    // inputRef.current.value = "Anika";
    // inputRef.current.style.backgroundColor = "red";
  };

  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <input ref={inputRef} type="search" placeholder="Search here!" />
      <button onClick={onFocusToggle}>Toggle Focus</button>
    </div>
  );
};

export default ProblemFocusFix;
