import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    phoneNumber: "",
    email: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h1>
          <strong>Form </strong>
        </h1>
        <label style={{ marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label style={{ marginBottom: "10px" }}>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label style={{ marginBottom: "10px" }}>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label style={{ marginBottom: "10px" }}>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label style={{ marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label style={{ marginBottom: "10px" }}>
          Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          >
            <option value="">Select</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <br />
        <label style={{ marginBottom: "10px" }}>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
