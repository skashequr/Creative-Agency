// Import ToastContainer at the top of your component
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from "react-router-dom";
const SignUp = () => {
  const [error,setError] = useState(" ")
  const notify = () => toast("Regester Sucessfully!");
  const { createNewUser } = useContext(AuthContext);

  const handleCreateNewUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one capital letter.")
      return ;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setError("Password must contain at least one special character.")
      return 
    }
    console.log(email, password);

    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError(" ")
        notify();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        console.error("Error creating a new user:", errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div>
        <h2 className="text-5xl font-extrabold mb-14">Register Here</h2>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleCreateNewUser} className="card-body">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">Have alredy account?</Link>
          </label>
        </div>
          <p className='text-red-900'>{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default SignUp;
