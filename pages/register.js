import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 different Characters, Uppercase, Lowercase, Number and Specialcase Character"
    ),
  passwordConfirm: Yup.string()
    .required("Confirm Password is a required field")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

const register = () => {
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "", passwordConfirm: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span className="form-span">REGISTER</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                  placeholder="Confirm Password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.passwordConfirm &&
                    touched.passwordConfirm &&
                    errors.passwordConfirm}
                </p>

                {/* Click on submit button to submit the form */}
                <button type="submit" disabled={isSubmitting}>
                  Continue
                </button>
                <p>ALTERNATIVELY</p>
                <GoogleButton
                  disabled={isSubmitting}
                  className="google-button"
                  onClick={() => signIn()}
                />
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default register;
