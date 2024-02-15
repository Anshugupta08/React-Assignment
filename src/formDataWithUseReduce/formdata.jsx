import { useReducer } from "react";

const initialState = {
  name: "",
  address: "",
  pincode: "",
  phoneNumber: "",
  email: "",
  country: "",
  gender: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.fieldName]: action.payload };
    default:
      return state;
  }
};

const Form = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", fieldName: name, payload: value });
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
        {Object.keys(initialState).map((fieldName) => (
          <label key={fieldName} style={{ marginBottom: "10px" }}>
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
            {fieldName === "gender" || fieldName === "country" ? (
              <select
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
                style={{ marginLeft: "10px", marginBottom: "10px" }}
              >
                <option value="">Select</option>
                {fieldName === "gender" ? (
                  <>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </>
                ) : (
                  <>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                  </>
                )}
              </select>
            ) : (
              <input
                type={fieldName === "email" ? "email" : "text"}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
                style={{ marginLeft: "10px", marginBottom: "10px" }}
              />
            )}
          </label>
        ))}
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
