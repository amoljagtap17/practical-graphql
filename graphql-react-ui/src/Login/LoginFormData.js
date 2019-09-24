import * as Yup from 'yup'
import {
  FormikFieldComponent,
  FormikFieldType
} from '../Formik/FormikConstants'

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!'),
  password: Yup.string().required('Password is required!')
})

const loginFormData = {
  fields: [
    {
      fieldType: FormikFieldType.TEXT,
      fieldComponent: FormikFieldComponent.INPUT,
      fieldName: 'username',
      fieldLabel: 'Username',
      fieldValue: '',
      fieldClassNames: 's12 m6'
    },
    {
      fieldType: FormikFieldType.PASSWORD,
      fieldComponent: FormikFieldComponent.INPUT,
      fieldName: 'password',
      fieldLabel: 'Password',
      fieldValue: '',
      fieldClassNames: 's12 m6'
    }
  ],
  yupValidationSchema: LoginFormSchema,
  formClassNames: 's12 m6'
}

export default loginFormData
