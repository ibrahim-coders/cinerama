import { Link } from 'react-router-dom';
// import { AuthProvider } from '../../components/AuthContext/AuthContext';
// import { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { LiaEyeSolid } from 'react-icons/lia';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [showPasswords, setShowPasswords] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const { creactNewUsers } = useContext(AuthProvider);
  // const [errorMess, setErrorMess] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const userName = e.target.username.value;
  //   const photo = e.target.photoUrl.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const conformPassword = e.target.confrompassword.value;
  //   const terms = e.target.terms.checked;
  //   console.log(userName, photo, email, password, conformPassword, terms);
  //   // Reset error message
  //   setErrorMess('');

  //   // Validation
  //   if (!terms) {
  //     setErrorMess('Please Accept Our terms and Conditions');
  //   }
  //   if (password.length < 6) {
  //     setErrorMess('Password must be at least 6 characters long.');
  //     return;
  //   }

  //   if (!/[A-Z]/.test(password)) {
  //     setErrorMess('Password must include at least one uppercase letter.');
  //     return;
  //   }

  //   if (!/[a-z]/.test(password)) {
  //     setErrorMess('Password must include at least one lowercase letter.');
  //     return;
  //   }

  //   if (password !== conformPassword) {
  //     setErrorMess('Passwords do not match.');
  //     return;
  //   }

  //   // Create New User
  //   creactNewUsers(email, password)
  //     .then(result => {
  //       console.log(result.user);
  //       navigate('/');
  //     })
  //     .catch(error => {
  //       console.error('Registration Error:', error.message);
  //       setErrorMess(error.message);
  //     });
  // };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(showPassword => !showPassword);
  // };
  // const ContogglePasswordVisibility = () => {
  //   setShowPasswords(showPasswords => !showPasswords);
  // };
  return (
    <div>
      <div className="max-w-md mx-auto my-10 p-6 border rounded-lg shadow-lg  bg-slate-800">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {' '}
          Register a New Account
        </h2>
        <form>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-200 pb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your username"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>
          {/* Photo URL */}
          <div className="mb-6">
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-slate-200 pb-2"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              // onChange={handleChange}
              placeholder="Enter your photo URL"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-200 pb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              // onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>

          {/* Password */}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200 pb-2"
            >
              Password
            </label>

            <div className="relative">
              <input
                // type={showPassword ? 'text' : 'password'}
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span
                // onClick={togglePasswordVisibility}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {/* {showPassword ? <LiaEyeSolid /> : <BsEyeSlash />} */}
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200 py-2"
            >
              Confrom Password
            </label>

            <div className="relative">
              <input
                // type={showPasswords ? 'text' : 'password'}
                name="confrompassword"
                placeholder="Confirm your password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />

              <span
                // onClick={ContogglePasswordVisibility}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {/* {showPasswords ? <LiaEyeSolid /> : <BsEyeSlash />} */}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {/* {errorMess && (
            <p className="text-sm text-red-500 mb-4">{errorMess}</p>
          )} */}

          <div className=" my-4">
            <label className="flex gap-4 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                className="checkbox text-sm"
              />
              <span className="label-text tex-xl">Accept Our Term</span>
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white border-gray-300 py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
        {/* Google Sign-In Option */}
        <div className="mt-6 text-center">
          <Link
            to="#"
            className="inline-flex bg-blue-500 items-center justify-center text-white w-full p-2 border border-gray-300 rounded-lg hover:bg-blue-600 ring-blue-300 focus:ring focus:ring-gray-300"
          >
            <FaGoogle className="mr-2 text-xl" />
            <p className="text-gray-700">Continue With Google</p>
          </Link>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          I already have an account ?
          <Link className="underline pl-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
