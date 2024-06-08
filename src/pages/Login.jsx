import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [identifier, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginButton = async (event) => {
    event.preventDefault();
    if (!identifier || !password) {
      toast.error("Please fill in all the fields", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      return;
    }
    

    axios.post("http://localhost:3000/login",{
      identifier,
      password,
    }).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        if (response.data.user.type === "doctor") navigate("/docprofile");
        if (response.data.user.type === "patient") navigate("/userProfile");
        if (response.data.user.type === "nurse") navigate("/NurseProfile");
      }
      
    }).catch((error) => {
       if (error.message === 'Network Error' || error.message.includes('ERR_CONNECTION_REFUSED')) {
            Swal.fire({
              icon: "error",
              title: "Connection Error",
              text: "Unable to establish a connection to the server.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "waaaaw...",
              text: error.response.data.message,
            });
          }
          });
   
  };

  return (
    <>
    <div className="flex items-end mt-20 justify-center bg-blur py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 ">
        <form className="mt-8 space-y-6" onSubmit={loginButton}>
          <div>
            <h2 className="mt-6 text-darkGreen4 text-center text-3xl font-extrabold">
              Login
            </h2>
          </div>
          <div className="rounded-md -space-y-px">
            <div>
              <label htmlFor="identifier" className="sr-only">
                Email
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen1 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email or Name"
              />
            </div>
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
                className="appearance-none rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen1 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                style={{ zIndex: 20 }}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <HiOutlineEye
                    className="w-8 h-10 text-gray-400 absolute right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                ) : (
                  <HiEyeOff
                    className="w-8 h-10 text-gray-400 absolute right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-darkGreen2 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-darkGreen1"
            >
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darkGreen4 hover:bg-darkGreen2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGreen1"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <a
              href="/ForgotPassword"
              className="font-medium text-darkGreen4 hover:text-greenHover hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="text-center">
            <Link
              to="/register"
              className="font-medium text-darkGreen4 hover:text-greenHover hover:underline"
            >
              Don&apos;t have an account? Signup
            </Link>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;





/* axios
 event.preventDefault();
    try {
      axios
        .post("http://localhost:3000/login", {
          identifier,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("data", JSON.stringify(response.data.user));
            navigate("/profile");
          } else {
            console.log("majach")
          }
        })
        .catch((error) => {
          if (error.message === 'Network Error' || error.message.includes('ERR_CONNECTION_REFUSED')) {
            Swal.fire({
              icon: "error",
              title: "Connection Error",
              text: "Unable to establish a connection to the server.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "waaaaw...",
              text: error.response.data.message,
            });
          }
          });
    } catch (error) {
      console.log("degat error", error);
    }
*/