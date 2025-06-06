import Lottie from "lottie-react";
import React, { use } from "react";
import LottieRegister from "../../assets/lotties/resgister.json";
import { Authcontext } from "../../context/authcontext/Authcontext";
import { useNavigate } from "react-router";
import SignInGoogle from "../shared/SignInGoogle";

const Register = () => {
  const { createuser } = use(Authcontext);
  const navigation = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //create user or signup user
    createuser(email, password)
      .then((result) => {
        console.log(result);
        return navigation("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              className="w-52"
              animationData={LottieRegister}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>

              <form onSubmit={registerHandler} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="text"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              {/* this is a components */}
              <SignInGoogle></SignInGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
