import React, { useState } from "react";
import { useForm } from "../customHooks/useForm";

function Form() {
  const { values, handleChange, handleSubmit, errors } = useForm(
    {
      email: "",
      password: "",
    },
    submit
  );
  const [localState, setLocalState] = useState({});
  console.log(localState); // this is where user input and pass is stored and can be used....
  // input state and formsubmit state was here

  // handlesubmit function was here

  // handlechange fnx was here

  function submit() {
    console.log("submitted successfully");
    setLocalState(values);
  }

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <div className="inputLabel">
        <label htmlFor="email">Email:</label>
        <div>
          <input
            className={errors.email ? "inputErr" : ""}
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <div>
          <input
            className={errors.password ? "inputErr" : ""}
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit">sign up</button>
    </form>
  );
}

export default Form;

// setDeets((prev) => {
//   return { ...prev, email: values.email, password: values.password };
// });
