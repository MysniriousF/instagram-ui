import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "./loginSchema";
import { login, me } from "../services/user.service";
import { UserContext } from "../App";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";

function Login() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  async function submit(values) {
    try {
      const { token } = await login(values);
      localStorage.setItem("token", token);
      const loggedUser = await me();
      setUser(loggedUser);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="Login container">
      <div>
        <h1 className="Login__title">Sign In</h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={submit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field id="username" name="username" placeholder="Username" />
              <div className="error">
                <ErrorMessage name="username" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <div className="error">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn-login">
                Sign In
              </button>
            </div>
          </Form>
        </Formik>
        <div className="Login__registration-link">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
      {/* <img src={intro} className="Login__intro-image" alt="Instagram" /> */}
    </div>
  );
}

export default Login;
