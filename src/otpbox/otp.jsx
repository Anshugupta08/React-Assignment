import { useRef, useEffect } from "react";

const OTPBox = () => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

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
          style={{ width: "30px", marginRight: "30px" }}
          onChange={(e) => handleInputChange(index, e)}
        />
      ))}
    </div>
  );
};

export default OTPBox;
