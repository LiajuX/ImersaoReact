import { useState } from 'react';

function useForm(initialValues) {
  // State of input values
  const [values, setValues] = useState(initialValues);

  function setValue(object, value) {
    setValues({
      ...values,
      [object]: value, // name: 'value'
    });
  }

  function handleInputChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValue(initialValues);
  }

  return {
    values,
    handleInputChange,
    clearForm,
  };
}

export default useForm;
