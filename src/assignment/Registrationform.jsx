import { useState } from "react";

const ProfileObj = () => {
  const [profile, setProfile] = useState({
    Fname: "Anshu",
    Mname: "",
    Lname: "GUPTA",
    Address: "",
    Street: "",
    City: "",
    Pincode: "",
    Mail: "",
    Mobile: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h1>
        <strong>Registration Form</strong>
      </h1>
      <h5>Fill out the Form Carefully for registration</h5>
      <h4>Student Name</h4>
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Fname}
        placeholder="First Name"
        name="Fname"
      />
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Mname}
        placeholder="Middle Name"
        name="Mname"
      />
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Lname}
        placeholder="Last Name"
        name="Lname"
      />

      <h4> Address</h4>
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Address}
        placeholder="Street Name "
        name="Address"
      />
      <br />
      <input
        onChange={onInputChange}
        type="text"
        value={profile.City}
        placeholder="city Name "
        name="City"
      />
      <br />
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Pincode}
        placeholder="Pincode Name "
        name="Pincode"
      />

      <h4>Student E-mail</h4>
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Mail}
        placeholder="e:myname@example.com "
        name="Mail"
      />

      <h4> Mobile</h4>
      <input
        onChange={onInputChange}
        type="text"
        value={profile.Mobileobile}
        placeholder="(000) 000 -0000"
        name="Mobile"
      />
      <br />
      <button> Submit</button>
      {/* <p>{profile.Fname}</p>
      <p>{profile.Mname}</p>
      <p>{profile.Lname}</p> */}
    </div>
  );
};

export default ProfileObj;
