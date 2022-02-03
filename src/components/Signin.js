import React,{useState} from 'react';
import Axios from "axios";
import { useDispatch } from 'react-redux';
import { login, selectUser ,logout} from '../features/userSlice';
import { useSelector } from 'react-redux';

const Signin = () => {




  const user  = useSelector(selectUser);

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

  const dispatch = useDispatch();

  const onSubmit =  (e) => {
    e.preventDefault();


    dispatch(login({
      email: email,
      password: password,
      loggedIn:true
    }))



    

    Axios.post("http://3.140.210.76:8000/api/token/", data)
      .then((response) => {
        console.log(response);
        setSuccess(true)
      })
      .catch((err) =>console.log(err));
  };


  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className="signup_form container">

    {
      user ? <h1>Logged in successfully!</h1> : <div>Login now</div>
    }


   
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

    <button onClick={(e) => handleLogout(e)} className="btn btn-succcess">Logout</button>
  </div>
  )
};

export default Signin;
