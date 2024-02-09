import { memo } from "react";

const Child = ({ onClick, image, id, title, isActive, description }) => {
  console.log("Child Re-render :");
  return (
    <>
      <div
        key={id}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          width: "200px",
          backgroundColor: isActive ? "green" : "white",
        }}
      >
        <img src={image} alt={title} style={{ maxWidth: "200px" }} />
        <h4>
          <strong>{title}</strong>
        </h4>
        <p>{description}</p>
        <button onClick={() => onClick(id)}>Change background</button>
        {/* <button onClick={onClick}>Previous color</button> */}
      </div>
    </>
  );
};

export default memo(Child);
