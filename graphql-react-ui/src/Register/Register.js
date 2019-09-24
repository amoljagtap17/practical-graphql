import React from 'react'
import gql from 'graphql-tag'
import * as Yup from 'yup'
import { useMutation } from '@apollo/react-hooks'
import M from 'materialize-css/dist/js/materialize.min.js'
import RegisterForm from './RegisterForm'

const REGISTER_USER = gql`
  mutation register($name: String!, $username: String!, $password: String!) {
    register(name: $name, username: $username, password: $password)
  }
`

const initialValues = {
  name: '',
  username: '',
  password: ''
}

const RegisterFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  username: Yup.string().required('Username is required!'),
  password: Yup.string().required('Password is required!')
})

const Register = () => {
  const [register, { loading }] = useMutation(REGISTER_USER)

  const handleSubmit = async (values, actions) => {
    /* setTimeout(() => {
      console.log('FORM >>', JSON.stringify(values, null, 2))
      console.log('ACTIONS >> ', actions)
      actions.setSubmitting(false)
      actions.resetForm(initialValues)
    }, 2000) */

    try {
      const { data } = await register({ variables: { ...values } })

      data.register &&
        M.toast({
          html: `User ${values.name} was registered!`,
          classes: 'rounded light-green darken-4'
        })

      actions.resetForm(initialValues)
    } catch (err) {
      console.log('err', err.message)
      M.toast({
        html: `User ${values.name} was not registered!, ${err.message}`,
        classes: 'rounded red darken-4'
      })
    }

    actions.setSubmitting(false)
  }

  return (
    <div>
      <h2>Register Page!</h2>
      {loading && <p>Adding User...</p>}
      <RegisterForm
        initialValues={initialValues}
        RegisterFormSchema={RegisterFormSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Register
