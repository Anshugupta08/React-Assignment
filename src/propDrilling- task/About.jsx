import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About Page</h2>

      <hr />
      <Link to="/">Go to Home Page</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </>
  );
};

export default About;
