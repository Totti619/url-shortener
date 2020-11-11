const { param, body } = require('express-validator')
const validator = {}

validator.redirectToUrlValidator = [
    param('slug').isString()
]
validator.storeUrlValidator = [
    body('url').isURL(),
    body('slug').optional().isString()
]

module.exports = validator