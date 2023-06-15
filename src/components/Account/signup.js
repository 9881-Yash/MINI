import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const password = watch("password"); // Get the value of the password field

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-centre" style= {{ margin: "50px 0 35px 0" }}>
            <h2>Registration</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
          </div>
          {errors.email && (
            <p className="text-danger">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-danger">Entered email is in the wrong format</p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              {...register("mobile", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
          </div>
          {errors.mobile && (
            <p className="text-danger">Mobile number is required</p>
          )}
          {errors.mobile?.type === "minLength" && (
            <p className="text-danger">
              Entered mobile number is less than 10 digits
            </p>
          )}
          {errors.mobile?.type === "maxLength" && (
            <p className="text-danger">
              Entered mobile number is more than 10 digits
            </p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
          </div>
          {errors.password && (
            <p className="text-danger">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">
              Entered password is less than 5 characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-danger">
              Entered password is more than 20 characters
            </p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
            />
          </div>
          {errors.confirmPassword?.type === "required" && (
            <p className="text-danger">Confirm password is required</p>
          )}
          {errors.confirmPassword?.type === "validate" && (
            <p className="text-danger">Passwords do not match</p>
          )}
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
