import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="py-20">
      <div>
        <h1 className="text-4xl font-extrabold mb-3">create an Account</h1>
        <p className='mb-10'>Login with ZapShift</p>
       
      </div>
      <form>
        <div className="flex flex-col">
          
          <label>Email</label>
          <input
            placeholder="Enter Your Email"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="email"
          />
          <label>Password</label>
          <input
            placeholder="Enter Your Password"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="password"
          />
          <Link to='/forget'>Forget Password?</Link>
          <input
            className="border border-gray-200 max-w-3/5 mt-5 py-2 bg-primary"
            type="submit"
            value="Login"
          />
        </div>
        <p className="mt-3 text-sm">
          Don’t have any account? 
          <Link className="text-green-500 " to="/register">
           Register
          </Link>
        </p>

        <p className="text-center max-w-3/5 my-5">Or</p>
        <button class="btn bg-white w-3/5 text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </div>
    );
};

export default Login;