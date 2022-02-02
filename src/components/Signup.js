import Axios from "axios";
import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Signup = () => {

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { first_name, last_name, email, password } = data;

 

  const validate = (values) => {
    const errors = {};


    if (!values.first_name) {
      errors.first_name = "First Name is Required!";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is Required!";
    }
    if (!values.email) {
      errors.email = "Email is Required!";
    }
    if (!values.Password) {
      errors.Password = "Password is Required!";
    }
    return errors;
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit =  (e) => {
    e.preventDefault();

    setError(validate(data));
    setIsSubmit(true);


    Axios.post("http://3.140.210.76:8000/api/user/", data)
      .then((response) => {
        console.log(response);
        setSuccess(true)
      })
      .catch((err) =>console.log(err));
  };



  return (
    <div className="signup_form container">

    <div className="alert"
    style={{display: success ? "" : "none"}}
    >
    <h1>Successfully Signed UP!</h1>
    <Link to="/login">Login from here</Link>
    </div>
  
      <form action="" onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            id="exampleFormControlInput1"
            value={first_name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <p>{error.first_name}</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            id="exampleFormControlInput1"
            value={last_name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <p>{error.last_name}</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <p>{error.email}</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleFormControlInput1"
            value={password}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <p>{error.password}</p>

        <div className="mb-3">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Signup;
