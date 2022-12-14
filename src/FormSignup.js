import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css"

const FormSignup = ({submitForm}) => {

    const {values,handleChange,handleSubmit,errors} = useForm(submitForm,validate);
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter you Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter you Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter you Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}

        </div>
        <button onClick={handleSubmit} className="form-input-btn">Sign Up</button>
        <span className="form-input-login">Aready have an account? Login <a href="#">here</a></span>
      </form>
    </div>
  );
};

export default FormSignup;
