import React from "react";
import { useForm } from "react-hook-form";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router";
import useAuth from "../../../hook/useAuth";
import SocalLogin from "../SocalLogin/SocalLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();
  const handleRegister = (data) => {
    console.log(data.photo[0]);
    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-20">
      <div>
        <h1 className="text-4xl font-extrabold mb-3">create an Account</h1>
        <p className="mb-10">Register with ZapShift</p>
        <RxAvatar className="my-5" size={40} />
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="flex flex-col">
          <label>Name</label>
          <input
            placeholder="Enter Your Name"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="text"
            {...register("name", { required: true })}
          />
          <label>Photo Image </label>
          <input
            placeholder="Enter Your Name"
            className="file-input w-3/5"
            type="file"
            {...register("photo", { required: true })}
          />
          <label>Email</label>
          <input
            placeholder="Enter Your Email"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          <label>Password</label>
          <input
            placeholder="Enter Your Password"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password should be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              at list 1 uppercase 1 lowercase 1 number and spacial character
            </p>
          )}
          <input
            className="border border-gray-200 max-w-3/5 mt-5 py-2 bg-primary"
            type="submit"
            value="Register"
          />
        </div>
        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <Link className="text-green-500 " to="/login">
            Login
          </Link>
        </p>

        <p className="text-center max-w-3/5 my-5">Or</p>
        <SocalLogin></SocalLogin>
      </form>
    </div>
  );
};

export default Register;
