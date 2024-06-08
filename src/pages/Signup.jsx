import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput2 from "react-phone-input-2";
import PhoneInput from "react-phone-number-input";
//import 'react-phone-input-2/lib/style.css'
import { HiOutlineEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("The passwords don't match", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      return;
    }

    const name = firstName + " " + lastName;
    axios
      .post("http://localhost:3000/signup-patient", {
        name,
        email,
        phone,
        password,
      })
      .then((response) => {
        console.log(response.data.message);
        toast.success(response.data.message, {
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response) {
          toast.error(error.response.data.message, {
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center bg-blur py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign Up
            </h2>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                /*className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"*/
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none my-1 relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="tel"
                pattern="^\(\d{3}\) \d{3}-\d{4}$"
                required
                className="appearance-none my-1 relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Enter phone number"
              />
            </div>
            {/* <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                  className="appearance-none my-1 relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              />*/}
            {/* <PhoneInput2
              country={"us"}
              value={phone}
              className="appearance-none my-1 relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              onChange={(phone) => setPhone({ phone })}
            />*/}

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                style={{ zIndex: 20 }}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <HiOutlineEye
                    className="w-8 h-10 text-gray-400 absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                ) : (
                  <HiEyeOff
                    className="w-8 h-10 text-gray-400 absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                )}
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={isPasswordVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-indigo-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryColor hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
