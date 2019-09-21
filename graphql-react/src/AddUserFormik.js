import React from 'react'
import * as Yup from 'yup'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Formik, Field, ErrorMessage } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import StyledForm from './StyledForm'
import { USERS } from './User'

const ADD_USER = gql`
  mutation makeUser($name: String!) {
    makeUser(name: $name) {
      id
      name
      car {
        make
      }
    }
  }
`

const AddUserForm = props => (
  <StyledForm data-test="form">
    <fieldset disabled={props.isSubmitting} aria-busy={props.isSubmitting}>
      <div className="modal-content">
        <h4>Add User</h4>

        <div className="row">
          <div className="input-field col s6">
            <Field
              className={props.errors.username && 'invalid'}
              name="username"
              id="username"
              type="text"
            />
            <label htmlFor="username">User Name</label>
            <ErrorMessage
              className="helper-text"
              name="username"
              data-error={props.errors.username}
              component="span"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="modal-close waves-effect waves-red btn-flat"
        >
          Close
        </button>
        <button
          disabled={!props.isValid}
          type="submit"
          className="btn waves-effect waves-light"
        >
          Submit
        </button>
      </div>
    </fieldset>
  </StyledForm>
)

const initialValues = {
  username: ''
}

const AddUserSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'too Long!')
    .required('Username is required!')
})

const AddUserFormik = () => {
  const [makeUser] = useMutation(ADD_USER)

  const handleSubmit = async ({ username }, { resetForm }) => {
    try {
      await makeUser({
        variables: { name: username },
        refetchQueries: [
          {
            query: USERS
          }
        ],
        awaitRefetchQueries: true
      })
    } catch (err) {
      M.toast({ html: err.message, classes: 'rounded' })
    }

    resetForm(initialValues)
  }

  return (
    <div className="modal" id="addUserModal">
      <Formik
        validationSchema={AddUserSchema}
        initialValues={initialValues}
        component={AddUserForm}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddUserFormik
