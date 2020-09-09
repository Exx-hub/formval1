import React from "react";
import { useForm } from "../customHooks/useForm";

function FakeForm() {
  const { values, handleChange, handleSubmit } = useForm({ input: "" }, submit);

  function submit() {
    console.log("submitted successfully");
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="input"
        value={values.input}
        onChange={handleChange}
      />
      {values.input}
      <button>Search</button>
    </form>
  );
}

export default FakeForm;
