import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>

      <hr />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/">Go to Home page</Link>
    </>
  );
};

export default Contact;
