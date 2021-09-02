import { useState, useEffect } from 'react';
import { firestore } from "../../config"

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    firestore.collection("contactQueries").doc().set({
      values
    }).then(() => {

      setIsSubmitting(true);
    }).catch(error => {
      setErrors(validate(values), error);
    })
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;