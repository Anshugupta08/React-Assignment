import { Component } from "react";
import "./style.css";

class MYForm extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    submit: false,
    range_value: 0,
    show: false,
    gender: "",
    date_value: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    this.setState({ [name]: value });
  };

  setGender = (e) => {
    this.setState({ gender: e.target.value });
  };

  onSubmitBtn = () => {
    const { fName, lName, email } = this.state;
    const isValid =
      fName !== "" &&
      lName !== "" &&
      email !== "" &&
      this.setState({ submit: !this.state.submit, show: isValid });
  };

  closeModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const {
      fName,
      lName,
      email,

      submit,
      range_value,

      gender,
      date_value,
    } = this.state;

    console.log("State: ", this.state);
    //console.log("Name")

    return (
      <div className="container">
        <div className="subContainer">
          <h1>
            <strong>Form </strong>
          </h1>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>First Name</strong>
            </h4>
            <input
              className="inputtxtType"
              name="fName"
              type="text"
              placeholder="First Name..."
              value={fName}
              onChange={this.onInputChange}
            />
            {submit && fName === "" && (
              <div>
                <p className="validationTxt">First Name</p>
              </div>
            )}
          </div>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>Last Name</strong>
            </h4>
            <input
              className="inputtxtType"
              type="text"
              name="lName"
              placeholder="Last Name..."
              value={lName}
              onChange={this.onInputChange}
            />
            {submit && lName === "" && (
              <div>
                <p className="validationTxt"> Last Name</p>
              </div>
            )}
          </div>
          <div className="inputField">
            <h4 className="headingTxt">
              <strong>Email</strong>
            </h4>
            <input
              className="inputtxtType"
              type="email"
              name="email"
              placeholder="Email..."
              value={email}
              onChange={this.onInputChange}
              required
            />
            {submit && (email === "" || !email.includes("@")) && (
              <div>
                <p className="validationTxt">Email address</p>
              </div>
            )}
          </div>

          <div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Gender</strong>
                </h4>
              </div>

              <div className="inputRadioType ">
                <input
                  type="radio"
                  name="Male"
                  checked={gender == "Male"}
                  onChange={this.setGender}
                  value="Male"
                />{" "}
                <label>Male</label>
                <input
                  type="radio"
                  name="Female"
                  checked={gender == "Female"}
                  onChange={this.setGender}
                  value="Female"
                />{" "}
                <label>Female</label>
              </div>
            </div>

            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>Age</strong>
                </h4>
              </div>
              <div>
                <input
                  className="inputtxtType"
                  name="range_value"
                  type="range"
                  min={1}
                  max={100}
                  value={range_value}
                  onChange={this.onInputChange}
                />
                <p>Age: {range_value} years.</p>
              </div>
            </div>
            <div className="inputField">
              <div>
                <h4 className="headingTxt">
                  <strong>DOB</strong>
                </h4>
              </div>
              <div>
                <input
                  name="date_value"
                  value={date_value}
                  type="date"
                  className="inputtxtType"
                  onChange={this.onInputChange}
                />
              </div>
            </div>
          </div>
          <div className="submitBtn">
            <input
              className="btnType"
              type="submit"
              onClick={this.onSubmitBtn}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MYForm;
