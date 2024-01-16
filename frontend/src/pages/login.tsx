import {useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";



const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email address"),
  password: Yup.string().required("Please enter a valid password").min(8),
});

const Login = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="login-container">
      <h1 className="login-header">Login with AKart</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-field">
          <label htmlFor="email" >
            Please enter your email
          </label>
          <input
            type="email"
            name=""
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="loginmail@gmail.com"
            className=""
          />
          {errors.email && touched.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="password" >
            Please enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className=""
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="eye-icon"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="eye-icon"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <div className="">
          <input type="submit" value="Login" className="submit-button" />
        </div>
        <br />
        <h5 className="signup-text">
          {" "}
          Or join us with
        </h5>
        <div className="social-login">
          <FcGoogle size={30} className="" />
          <AiFillGithub size={30} className="" />
        </div>

        <h5 className="signup-text">
          Dont have any account?{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;