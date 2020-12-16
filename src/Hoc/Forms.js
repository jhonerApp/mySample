import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms(initialValues, validate) {
  const { register, handleSubmit } = useForm();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = { [name]: value };
    setValues({ ...values, ...fieldValue });
    validate(fieldValue);
  };

  const resetForm = () => {
    setValues({
      ...initialValues,
    });
    setErrors({});
  };

  return {
    values,
    errors,
    setErrors,
    handleInputChange,
    register,
    handleSubmit,
    resetForm
  };
}
