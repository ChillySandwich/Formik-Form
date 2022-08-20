import React from 'react';
import { Formik, Form } from 'formik';
import { Button, TextField, Typography, Box, Checkbox, Autocomplete } from '@mui/material'
import * as Yup from 'yup';

const SignUpForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const colorValues = [
    {
      label: "Blue",
      value: "Blue"
    },
    {
      label: "Green",
      value: "Green"
    },
    {
      label: "Red",
      value: "Red"
    },
    {
      label: "Purple",
      value: "Purple"
    },
    {
      label: "Grey",
      value: "Grey"
    }
  ]
  

  return (
    <Formik
      initialValues={{
        lastName: '',
        firstName: '',
        email: '',
        terms: false,
        color: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        terms: Yup.boolean().oneOf([true],'Message')
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      {({ values, touched, handleChange, errors, setFieldValue }) => {
        return (

        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">

          <Box minHeight='30vh' sx={{ boxShadow: 3, borderRadius: 5, backgroundColor: '#e0f2f1', p: 5 }} >

            <Typography variant="h3" sx={{ pb: 2 }}>
              Formik Form with MUI
            </Typography>

            <Form>

              <TextField
                fullWidth
                margin="dense"
                id="firstName"
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />


              <TextField
                fullWidth
                margin="dense"
                id="lastName"
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.firstName)}
                helperText={touched.lastName && errors.lastName}

              />

              <TextField
                fullWidth
                margin="dense"
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <Autocomplete
                id='color'
                name='color'
                options={colorValues}
                sx={{ width: 300, py: 1 }}
                getOptionLabel={(option) => option.label}
                onChange={(_, value) => {
                  setFieldValue("color", value.value);
                }}
                renderInput={(params) => <TextField {...params} label="Favourite Color" onChange={handleChange} value={values?.color}/>}
              />

              <Box display='flex' alignItems={'center'} sx={{ py: 2 }}>
                <Checkbox
                  name='terms'
                  value={values.terms}
                  onChange={handleChange}
                  error={touched.terms && Boolean(errors.terms)}
                  color={values.terms ? "default" : "error"}

                />
                <Typography variant={'overline'}>I accept the terms and conditions</Typography>
              </Box>

              <Button color="primary" variant="contained" type="submit" size='large'>
                Submit
              </Button>
            </Form>
          </Box>
        </Box>
      )}}
    </Formik>
  )

}

const App = () => {

  return (

    <SignUpForm />

  )
}

export default App;
