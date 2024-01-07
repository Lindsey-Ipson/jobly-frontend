import React, { useState } from "react";

function LoginForm () {

  const handleSubmit = evt => {
    evt.preventDefault();
    
    // do something with the data submitted
  };

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Last:</label>
      <input
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;