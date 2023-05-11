const yup = require('yup')

const createCategorySchema = yup.object().shape({
  category: yup.string().required('Category Name is Required!'),
  tags: yup.array().typeError('Tags must be array'),
})

const updateCategorySchema = yup.object().shape({
  category: yup.string().optional(),
  tags: yup.array().optional().typeError('Tags must be array'),
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
}
