// import { useState } from "react";

// const MyForm = () => {
//   // State to hold form data
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//   });

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any action with the form data here
//     console.log("Form submitted with data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;

// import { useState } from "react";

// const MyForm = () => {
//   // State to hold form data
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     dob: "",
//     password: "",
//   });

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any action with the form data here
//     console.log("Form submitted with data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Age:
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Date of Birth:
//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
