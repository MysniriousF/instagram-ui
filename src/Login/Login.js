import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "./loginSchema";
import { login, me } from "../services/user.service";
import "./login.scss";
import { UserContext } from '../App'
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const {setUser } = useContext(UserContext)
  async function submit(values) {
    try {
      const { token } = await login(values);
      localStorage.setItem('token',token);
      const loggedUser = await me();
      setUser(loggedUser)
      history.push('/:username')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={submit}
      >
        <Form>
          <div className="pageBody">
            <h1>Login</h1>
            <div className="row">
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" placeholder="Username" />
              <ErrorMessage name="username" />
            </div>
            <div className="row">
              <label htmlFor="password1">Password</label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" />
            </div>
            <div className="row">
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
