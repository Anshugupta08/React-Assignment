import { useState } from "react";
import "./LinkedInAuth.css"; // Import CSS file for styling

const LinkedInSignup = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submit the data to your backend here
    console.log("Signup data:", signupData);
  };

  return (
    <div className="form-container">
      <h2>LinkedIn Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={signupData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={signupData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={signupData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const LinkedInLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform login authentication and redirection here
    console.log("Login data:", loginData);
  };

  return (
    <div className="form-container">
      <h2>Already having Account? Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const LinkedInAuth = () => {
  return (
    <div className="auth-container">
      <LinkedInSignup />
      <hr />
      <LinkedInLogin />
    </div>
  );
};

export default LinkedInAuth;
