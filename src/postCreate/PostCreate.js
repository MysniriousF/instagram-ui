import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postSchema } from "./post.schema";
import { create } from "../services/post.service";
// import { useHistory } from "react-router";

export default function PostCreate() {
//   const history = useHistory();

  async function submit(values) {
    try {
      await create(values);
      //history.push('/')
      console.log(values);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="register">
      <Formik
        initialValues={{ body: "", image: null }}
        validationSchema={postSchema}
        onSubmit={submit}>
        {({ setFieldValue }) => (
             <Form>
            <div className="pageBody">
              <input type="file" name="image" onChange = {e => {
                 setFieldValue( 'image',e.currentTarget.files[0])
              }}/>
              <div className="error">
                <ErrorMessage name="image" />
              </div>
              <div className="row">
                {/* <label htmlFor="body">Post Content:</label> */}
                <Field id="body" name="body" placeholder="Write a post" />
                <ErrorMessage name="body" />
              </div>
            </div>
            <div className="pageBody">
              <button type="submit" className="btn">
                Create Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
