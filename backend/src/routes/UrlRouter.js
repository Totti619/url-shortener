const router = require('express').Router()
const Url = require('../models/Url')
const { redirectToUrl, storeUrl } = require('../controllers/UrlController')
const { redirectToUrlValidator, storeUrlValidator } = require('../validators/UrlValidator')

router.route('/:slug')
    .get(redirectToUrlValidator, redirectToUrl)

router.route('/')
    .post(storeUrlValidator, storeUrl)

module.exports = router