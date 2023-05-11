const yup = require('yup')
const { objectId } = require('./regexp')

const createReviewSchema = yup.object().shape({
  user: yup.string().optional().matches(objectId, 'Invalid User Id!'),
  product: yup
    .string()
    .required('Product is Required!')
    .matches(objectId, 'Invalid Product Id!'),
  comment: yup.string().required('Comment is Required!'),
  rating: yup
    .number()
    .required('Rating is Required!')
    .typeError('Rating Must Be Number')
    .test(
      'len',
      'Rating Must Be Between 0 to 5',
      (val) => val >= 0 && val <= 5
    ),
})

const updateReviewSchema = yup.object().shape({
  user: yup.string().optional().matches(objectId, 'Invalid User Id!'),
  product: yup.string().optional().matches(objectId, 'Invalid Product Id!'),
  comment: yup.string().optional(),
  rating: yup
    .number()
    .optional()
    .typeError('Rating Must Be Number')
    .test(
      'len',
      'Rating Must Be Between 0 to 5',
      (val) => val >= 0 && val <= 5
    ),
})

module.exports = {
  createReviewSchema,
  updateReviewSchema,
}
