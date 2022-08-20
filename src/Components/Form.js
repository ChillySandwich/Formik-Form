import './App.css';
import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material'



const validate = values => {
  const errors = {}
  if(!values.firstName){
    errors.firstName = 'Required'
  }
  else if(values.firstName.length > 15){
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;

}     
      

export const Form = () => {
      // Pass the useFormik() hook initial form values and a submit function that will
      // be called when the form is submitted
      const formik = useFormik({
        initialValues: {
          firstName: '',
          email: '',
        },
        validate, 
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <div>
          <label htmlFor="firstName">Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
          </div>

          <label htmlFor="email">Email Address</label>
          <div>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>

      
    
          <Button color="primary" variant="contained"  type="submit">
            Submit
          </Button>
        </form>
      )
}