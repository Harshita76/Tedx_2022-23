import { useState, useEffect } from 'react';
import {db} from "../../config"
import { collection, addDoc } from "firebase/firestore"; 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*firestore.collection("contactQueries").doc().set({
      values
    }).then(() => {

      setIsSubmitting(true);
    }).catch(error => {
      setErrors(validate(values), error);
    })*/
    try {
      const docRef = await addDoc(collection(db, "contactQueries"), {
        values
      });
      setValues({username: '',
      email: '',
      message: ''})
    } catch (e) {
      setErrors(validate(values), e);
    }
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