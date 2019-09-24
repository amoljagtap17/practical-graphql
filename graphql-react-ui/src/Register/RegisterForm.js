import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const RegisterForm = ({ isSubmitting, errors }) => (
  <div className="row">
    <Form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" className={errors.name && 'invalid'} />
          <ErrorMessage
            className="helper-text"
            data-error={errors.name}
            name="name"
            component="div"
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            name="username"
            className={errors.username && 'invalid'}
          />
          <ErrorMessage
            className="helper-text"
            data-error={errors.username}
            name="username"
            component="div"
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            className={errors.password && 'invalid'}
          />
          <ErrorMessage
            className="helper-text"
            data-error={errors.password}
            name="password"
            component="div"
          />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button disabled={isSubmitting} className="btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </Form>
  </div>
)

const FormikRegisterForm = ({
  initialValues,
  RegisterFormSchema,
  handleSubmit
}) => (
  <Formik
    enableReinitialize={true}
    initialValues={initialValues}
    validationSchema={RegisterFormSchema}
    onSubmit={handleSubmit}
    component={RegisterForm}
    validateOnChange={false}
    validateOnBlur={true}
  />
)

export default FormikRegisterForm
