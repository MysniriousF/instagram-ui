import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './register.schema';
import { register } from '../services/user.service';
import './register.scss';
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();

    async function submit(values) {
        try {
            await register(values);
            history.push('/login');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className = "Register">
            <Formik initialValues = {{username: '', email: '', password: ''}}
            validationSchema={registerSchema}
                onSubmit = {submit}>
                <Form>
                    
                    <div className = "pageBody">
                    <h1>Registration</h1>
                    <div className = "row">
                        <label htmlFor="username">Username</label>
                        <Field id = "username" name = "username" placeholder="Username"/>
                        <ErrorMessage name = "username"/>
                    </div>
                    <div className = "row">
                        <label htmlFor="email">Email</label>
                        <Field type = "email" name = "email" placeholder="Email Address"/>
                        <ErrorMessage name = "email"/>
                    </div>
                    <div className = "row">
                        <label htmlFor="password">Password</label>
                            <Field type="password" name = "password" placeholder="Password"/>
                            <ErrorMessage name = "password"/>
                    </div>
                        <div className = "row">
                        <button className="btn" type = "submit">Create</button>
                    </div>
                </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;