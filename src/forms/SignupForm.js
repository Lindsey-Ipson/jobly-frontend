import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../common/ErrorAlert";

function SignupForm({ signup }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

    async function handleSubmit (evt) {
    evt.preventDefault();
    
    const signupRes = await signup(formData);
    if (signupRes.signedUp) {
    navigate("/companies");
    }
    else {
      console.log("signupRes", signupRes)
      setErrors(signupRes.errs);
    }
  }

  return (
    <div className="SignupForm">
      <div className="container col-md-6 col-lg-4 mt-5">
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
          <div className="mb-3 text-start">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              required
            />
          </div>

          {errors.length ? <ErrorAlert alertType="danger" errs={errors} /> : null}

          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ErrorAlert from "../common/ErrorAlert";

// function SignupForm ({ signup }) {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: ""
//   });

//   const [errors, setErrors] = useState([]);

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setFormData(fData => ({
//       ...fData,
//       [name]: value
//     }));
//   };


//   async function handleSubmit (evt) {
//     evt.preventDefault();
    
//     const signupRes = await signup(formData);
//     if (signupRes.signedUp) {
//     navigate("/companies");
//     }
//     else {
//       console.log("signupRes", signupRes)
//       setErrors(signupRes.errs);
//     }
//   }

//   return (
//     <div>
//       SignupForm
//     </div>
//   )
// }

// export default SignupForm;

