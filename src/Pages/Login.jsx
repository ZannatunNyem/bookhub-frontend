import React, {  useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthContext'
import Swal from 'sweetalert2';

 const Login=()=> {
  const {signinUser}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogin = e =>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;

    console.log(email,password);

   signinUser(email, password)
  .then((result)=>{
   
        
        Swal.fire({
          icon: "success",
          title: "Login Successful 🎉",
          text: `Welcome back`,
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
        navigate("/");
  })
  .catch((error) => {
    console.log(error)
      Swal.fire({
    icon: "error",
    title: "Login Failed",
  });
  });
  }
  return (
 <div className="my-14 flex items-center justify-center">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin}>
           <fieldset className="fieldset">

          <label className="label text-neutral">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          <label className="label text-neutral">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral my-3">Login</button>
        </fieldset>
        </form>
        <p className='text-xs'>Don't have any account? <Link to={"/register"} className='text-primary-content font-semibold'>Register</Link> </p>
      </div>
    </div>
 </div>
  )
}
export default Login;