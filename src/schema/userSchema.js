const yup = require('yup')
const { email, mobile, password, image, imageSize } = require('./regexp')

const createUserSchema = yup.object().shape({
  name: yup.string().required('Name is Required!'),
  email: yup
    .string()
    .matches(email, 'Invalid Email Address!')
    .required('Email is Required!'),
  mobile: yup
    .string()
    .matches(mobile, 'Invalid Mobile Number!')
    .required('Mobile Number is Required!'),
  password: yup
    .string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
})

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(email, 'Invalid Email!')
    .required('Email is Required!'),
  password: yup
    .string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
  remember: yup.boolean(),
  // .required('The terms and conditions must be accepted.')
  // .oneOf([true], 'The terms and conditions must be accepted.'),
})

const updateUserSchema = yup.object().shape({
  name: yup.string().optional(),
  mobile: yup.string().optional().matches(mobile, 'Invalid Mobile Number!'),
  email: yup.string().optional().matches(email, 'Invalid Email Address!'),
})

const updateAvatarSchema = yup.object().shape({
  avatar: yup
    .mixed()
    .test(
      'fileSize',
      'File more than 1 MB not Allowed',
      (value) => value && value.size <= imageSize
    )
    .test(
      'fileFormat',
      'Unsupported Image Format!',
      (value) => value && image.includes(value.type)
    ),
})

const updatePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Old Password is Required!')
    .matches(password, 'Invalid Password!')
    .min(8, 'Invalid Password!')
    .max(50, 'Invalid Password!'),
  newPassword: yup
    .string()
    .required('New Password is Required!')
    .notOneOf([yup.ref('currentPassword')], 'Nothing to change!')
    .matches(password, 'Uppercase Lowercase Special char Required')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is Required!')
    .when('newPassword', (password, field) =>
      password ? field.required() : field
    )
    .oneOf([yup.ref('newPassword')], 'Password does not matched'),
})

module.exports = {
  createUserSchema,
  loginSchema,
  updateUserSchema,
  updateAvatarSchema,
  updatePasswordSchema,
}
