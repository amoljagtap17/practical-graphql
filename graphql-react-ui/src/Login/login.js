import React from 'react'
import loginFormData from './LoginFormData'
import { FormikForm } from '../Formik'

const Login = () => {
  const initialValues = loginFormData.fields.reduce(
    (obj, { fieldName, fieldValue }) => {
      obj[fieldName] = fieldValue
      return obj
    },
    {}
  )

  const handleSubmit = async (values, actions) => {
    setTimeout(() => {
      console.log('FORM >>', JSON.stringify(values, null, 2))
      console.log('ACTIONS >> ', actions)
      actions.setSubmitting(false)
      actions.resetForm(initialValues)
    }, 1500)
  }

  return (
    <div>
      <h2>Login Page!</h2>
      <FormikForm loginFormData={loginFormData} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Login
