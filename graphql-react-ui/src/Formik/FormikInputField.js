import React, { Fragment } from 'react'
import { Field, ErrorMessage } from 'formik'

const FormikInputField = ({
  fieldType,
  fieldName,
  fieldLabel,
  fieldErrorMsg
}) => (
  <Fragment>
    <label htmlFor={`${fieldName}`}>{fieldLabel}</label>
    <Field
      type={fieldType}
      name={`${fieldName}`}
      className={fieldErrorMsg && 'invalid'}
    />
    <ErrorMessage
      className="helper-text"
      data-error={fieldErrorMsg}
      name={`${fieldName}`}
      component="div"
    />
  </Fragment>
)

export default FormikInputField
