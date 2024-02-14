import { Context } from "./usecontext/dataprovider";
import { useContext } from "react";

const Home = () => {
  const { Theme, Themechanger } = useContext(Context);
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {" "}
      <h1
        style={{
          margin: "0px",
          padding: "10px",
        }}
      >
        This is home Page .
      </h1>
      <button
        onClick={() => Themechanger(!Theme)}
        style={{
          color: Theme ? "white" : "black",
          backgroundColor: Theme ? "black" : "white",
        }}
      >
        {" "}
        Dark Mode
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi minus
        itaque quae eos laboriosam, repellendus numquam ullam eum in quis,
        incidunt laudantium temporibus quisquam veniam, rerum fugit cumque
        eligendi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi minus
        itaque quae eos laboriosam, repellendus numquam ullam eum in quis,
        incidunt laudantium temporibus quisquam veniam, rerum fugit cumque
        eligendi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi minus
        itaque quae eos laboriosam, repellendus numquam ullam eum in quis,
        incidunt laudantium temporibus quisquam veniam, rerum fugit cumque
        eligendi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi minus
        itaque quae eos laboriosam, repellendus numquam ullam eum in quis,
        incidunt laudantium temporibus quisquam veniam, rerum fugit cumque
        eligendi!
      </p>
    </div>
  );
};
export default Home;
