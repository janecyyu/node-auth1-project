import React from "react";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <input id="username" name="username" type="text" placeholder="Username" />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <button>submit</button>
    </div>
  );
}
export default Register;
