import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
  const { UserSignIn,googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSignIn =(event)=>{
    
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
 
    setError("");
    setSuccess("");
    UserSignIn(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setSuccess('You have successfully signed in')
      setError("")
      form.reset()
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
      setSuccess("")
    }) 
   }
   const handleGoogleLogin =()=>{
    googleLogin()
    .then(result=>{
      const googleUser =result.user;
      console.log(googleUser)
      setSuccess('successfuly logged in')
      setError('')
    })
    .catch(error=>{
      console.error()
      setError(error.message)
      setSuccess('')
    })
  }
    return (
        <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col w-full ">
          <div className="card w-2/3 max-w-md shadow-2xl shadow-blue-100 border-8 border-blue-950">
            <div className="card-body">
              <form onSubmit={handleSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Email
                    </span>
                  </label>
                  <input
                     type="text"
                     placeholder="email"
                     name="email"
                    className="input-color input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type={display ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input-color input input-bordered"
                  />
                  <p onClick={() => setDisplay(!display)}>
                    {display ? (
                      <FaEyeSlash className="text-blue-500 mt-2"></FaEyeSlash>
                    ) : (
                      <FaEye className="text-blue-500 mt-2"></FaEye>
                    )}
                  </p>
                  <label className="label">
                    <a
                      href="#"
                      className=" font-bold label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <p className="my-2 text-green-500 font-semibold">{success}</p>
                <p className="text-red-500 font-semibold">{error}</p>
                <div className="form-control mt-2">
                  <button className="btn btn-ghost text-white bg-blue-900 font-semibold">
                    Login
                  </button>
                </div>
                <p className="my-2 font-semibold">
                  New here?{" "}
                  <Link to="/login/register" className="hover:text-blue-600 ">
                    Register first
                  </Link>
                </p>
                <p onClick={handleGoogleLogin} className="bg-blue-900 btn btn-link my-2 font-semibold text-white">Google Login</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;