import { useRef } from "react";

function OTPBox() {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleInputChange = (index, e) => {
    if (e.target.value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (e.target.value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div>
      {inputRefs.map((inputRef, index) => (
        <input
          key={index}
          ref={inputRef}
          type="text"
          maxLength={1}
          style={{ width: "30px", marginRight: "10px" }}
          onChange={(e) => handleInputChange(index, e)}
          autoFocus={index === 0} // Focus the first input field
        />
      ))}
    </div>
  );
}

export default OTPBox;
