import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BsEyeSlash } from 'react-icons/bs';
import { LiaEyeSolid } from 'react-icons/lia';
import { AuthProvider } from '../AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [showErrorMess, setErrorMess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { UserLogin } = useContext(AuthProvider);
  const handleUserLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setErrorMess('Both email and password are required!');
      return;
    }

    UserLogin(email, password)
      .then(result => {
        console.log(result.user);
        setErrorMess('');
        toast.success('Login Successful!');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log('ERROR', error.message);
        setErrorMess(error.message);
        setErrorMess('Invalid email or password');
      });
  };

  const passwordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border rounded-lg shadow-lg  bg-slate-800">
      <p className="text-center text-2xl text-slate-200 font-medium">
        Sign in to your account
      </p>

      <form
        onSubmit={handleUserLogin}
        action="#"
        className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-200 pb-2"
          >
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        {showErrorMess && (
          <p className="text-red-500 text-sm text-center">{showErrorMess}</p>
        )}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-200 pb-2"
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />

            <span
              onClick={passwordVisibility}
              className="absolute inset-y-0 end-0 grid place-content-center px-4"
            >
              {showPassword ? <LiaEyeSolid /> : <BsEyeSlash />}
            </span>
          </div>
        </div>
        <div className="py-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-200 hover:underline"
          >
            Forgot your password?
          </label>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg border-gray-300 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-500">
        Create new account ?
        <Link className="underline pl-2" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
