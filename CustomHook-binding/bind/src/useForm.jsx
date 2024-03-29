import { useState } from "react";

function useForm(initialValue) {
  const [values, setValue] = useState(initialValue);
  const resetForm = () => {
    setValue(initialValue);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", values);

    resetForm();
  };

  return { values, handleChange, handleFormSubmit };
}

export default useForm;
