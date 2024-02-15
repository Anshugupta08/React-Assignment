import { useRef } from "react";

const ProblemFocusFix = () => {
  const inputRef = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);

  const onFocusToggle = () => {
    console.log(inputRef.current);
    if (!inputRef.current) return;
    inputRef.current.focus();
  };
  const onFocusToggle2 = () => {
    console.log(input2.current);
    if (!input2.current) return;
    input2.current.focus();
  };
  const onFocusToggle3 = () => {
    console.log(input3.current);
    if (!input3.current) return;
    input3.current.focus();
  };

  return (
    <>
      <div>
        <input ref={inputRef} type="search" placeholder="Box 1 " />
        <button onClick={onFocusToggle}>Focus on Box 1</button>
      </div>

      <div>
        <input ref={input2} type="search" placeholder="Box 2" />
        <button onClick={onFocusToggle2}>Focus on Box 2</button>
      </div>
      <div>
        <input ref={input3} type="search" placeholder="Box 3" />
        <button onClick={onFocusToggle3}>Focus on Box 3</button>
      </div>
    </>
  );
};

export default ProblemFocusFix;
