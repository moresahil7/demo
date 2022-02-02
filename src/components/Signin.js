import React,{useState} from 'react';
import Axios from "axios";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const {  email, password } = data;
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit =  (e) => {
    e.preventDefault();



    

    Axios.post("http://3.140.210.76:8000/api/token/", data)
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
    <h1>Hi you are logged in!</h1>
    </div>
    <form action="" onSubmit={onSubmit}>
      
      <div className='mb-3'>
        <label htmlFor="exampleFormControlInput1" class="form-label">
          Email
          </label>
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1"
          value={email}
          onChange={(e)=>handleChange(e)}
          />
        
      </div>
      <div className='mb-3'>
        <label htmlFor="exampleFormControlInput1" class="form-label">
          Password
          </label>
          <input type="password" name="password" className="form-control" id="exampleFormControlInput1"
          value={password}
          onChange={(e)=>handleChange(e)}
          />
        
      </div>
      <div className='mb-3'>
      <input type="submit" className="btn btn-primary" value="Submit" />
      </div>
    </form>
  </div>
  )
};

export default Signin;
