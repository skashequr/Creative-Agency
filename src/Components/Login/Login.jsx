import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const { googleLogin , loginbypass } = useContext(AuthContext);
    // console.log(loginbypass)
  // Function to show a success toast
  const notify = () => toast('Successfully Google login done!');
  const notify2 = () => toast('Successfully Password login done!');
  const location = useLocation()


  // Function to handle Google login
  const googleLoginHandling = () => {
    googleLogin()
    .then((result) => {
      const user = result.user;
      notify();
      setError('');
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 2000); 
    })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginbypass(email, password)
    .then((result) => {
      const user = result.user;
      notify2();
      setError('');
      setTimeout(() => {
        navigate("/");
      }, 2000); 
    })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="flex flex-wrap w-full mt-8 mb-8">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <button
              onClick={googleLoginHandling}
              className="p-4 rounded-2xl text-xl font-bold text-white bg-[#543E93]"
            >
              Google Login
            </button>
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Welcome.</p>
            <form
              onSubmit={handleEmailPassLogin}
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t-94.5 48-110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                      </path>
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="design-login-email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                      </path>
                    </svg>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <p className="text-red-700">{error}</p>
              <button
                type="submit"
                className="w-full bg-[#543E93] px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in shadow-md hover:text-white rounded-md hover:bg-black focus:outline-none focus:ring-2"
              >
                <span className="w-full">Submit</span>
              </button>
            </form>
            <div className="pt-12 pb-12 text-center">
              <p>
                Don't have an account?
                <Link to="/signup" className="font-semibold text-blue-900 underline">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden translate-y-0.5 origin-top-left object-cover w-full h-screen md:block"
            src="https://i.ibb.co/pZLKPjf/image.png"
            alt="Login Background"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
