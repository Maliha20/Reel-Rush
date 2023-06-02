import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser, profileUpdate, profileData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, confirm, password, name);
    setError("");
    setSuccess("");
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Please add at least one uppercase letter");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setError("Please add at least one number");
      return;
    }
     else if (!/.{6,}/.test(password)) {
      setError("Password should not be less than 6 characters");
      return;
    } else if (password !== confirm) {
      setError("Your password didn't match");
      return;
    } else {
      setSuccess("You have been successfully registered");
      setError("");
      event.target.reset();
      navigate('/login')
    }
    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        profileUpdate(name).then(() => {
          profileData(email, name);
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
    return (
        <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col w-full ">
          <div className="card w-2/3 max-w-md shadow-2xl shadow-blue-100 border-8 border-blue-950">
            <div className="card-body">
              <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className=" input input-bordered"
                />
              </div>
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
                    className=" input input-bordered"
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
                    className=" input input-bordered"
                  />
                  <p onClick={() => setDisplay(!display)}>
                    {display ? (
                      <FaEyeSlash className="text-blue-500 mt-2"></FaEyeSlash>
                    ) : (
                      <FaEye className="text-blue-500 mt-2"></FaEye>
                    )}
                  </p>
                </div>
                <div className="form-control mb-5">
                <label className="label">
                  <span className="label-text  font-bold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="confirm"
                  name="confirm"
                  className="input input-bordered"
                />
                </div>

                <p className="my-2 text-green-500 font-semibold">{success}</p>
                <p className="text-red-500 font-semibold">{error}</p>
                <div className="form-control mt-2">
                  <button className="btn btn-ghost text-white bg-blue-900 font-semibold">
                    Register
                  </button>
                </div>
                <p className="my-2 font-semibold">
                 Already have an account?{" "}
                  <Link to="/login" className="hover:text-blue-600 ">
                    Login
                  </Link>
                </p>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;