import FormikInputField from './FormikInputField'

const FormikFieldComponent = {
  INPUT: 'input'
}

const FormikFieldType = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email'
}

const FormikFieldMap = new Map()

FormikFieldMap.set(FormikFieldComponent.INPUT, FormikInputField)

export { FormikFieldComponent, FormikFieldType, FormikFieldMap }
