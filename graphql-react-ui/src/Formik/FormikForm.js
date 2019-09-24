import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import {
  FormikFieldType,
  FormikFieldComponent,
  FormikFieldMap
} from './FormikConstants'

const FormikFormWrapper = ({ loginFormData, handleSubmit }) => {
  const { fields, yupValidationSchema, formClassNames } = loginFormData
  const initialValues = fields.reduce((obj, { fieldName, fieldValue }) => {
    obj[fieldName] = fieldValue
    return obj
  }, {})

  console.log('initialValues', initialValues)

  const FormikForm = ({ isSubmitting, errors }) => {
    return (
      <Form className={`col ${formClassNames}`}>
        {fields.map(field => {
          const {
            fieldType,
            fieldComponent,
            fieldName,
            fieldLabel,
            fieldClassNames
          } = field

          const classNames = fieldClassNames
            ? `input-field col ${fieldClassNames}`
            : 'input-field col'

          const FieldComponent = FormikFieldMap.get(fieldComponent)

          return (
            <div className="row" key={fieldName}>
              <div className={classNames}>
                <FieldComponent
                  fieldType={fieldType}
                  fieldName={fieldName}
                  fieldLabel={fieldLabel}
                  fieldErrorMsg={errors[fieldName]}
                />
              </div>
            </div>
          )
        })}
        <div className="row">
          <div className="col s12">
            <button disabled={isSubmitting} className="btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    )
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={yupValidationSchema}
      onSubmit={handleSubmit}
      component={FormikForm}
      validateOnChange={false}
      validateOnBlur={true}
    />
  )
}

export default FormikFormWrapper

FormikFormWrapper.propTypes = {
  loginFormData: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        fieldType: PropTypes.oneOf(Object.values(FormikFieldType)).isRequired,
        fieldComponent: PropTypes.oneOf(Object.values(FormikFieldComponent))
          .isRequired,
        fieldName: PropTypes.string.isRequired,
        fieldLabel: PropTypes.string.isRequired,
        fieldValue: PropTypes.string.isRequired,
        fieldClassNames: PropTypes.string.isRequired
      })
    ),
    yupValidationSchema: PropTypes.object.isRequired,
    formClassNames: PropTypes.string.isRequired
  }),
  handleSubmit: PropTypes.func.isRequired
}
