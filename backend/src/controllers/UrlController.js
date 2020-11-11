const randomstring = require('randomstring')
const { validationResult } = require('express-validator');
const controller = {}
const Url = require('../models/Url')

controller.redirectToUrl = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { slug } = req.params
        const url = await Url.findOne({ slug })
        if (!url) {
            return res.status(404)
        }
        return res.redirect(url.url)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
controller.storeUrl = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { url } = req.body
        let { slug } = req.body
        const foundUrl = await Url.findOne({ url })
        if (foundUrl) {
            return res.status(200).json(foundUrl)
        }
        if (!slug) {
            slug = randomstring.generate({
                length: process.env.SLUG_LENGTH || 7,
                charset: 'alphanumeric',
            })
        }
        const newUrl = new Url({ url, slug })
        const savedUrl = await newUrl.save()
        if (savedUrl) {
            return res.status(200).json(savedUrl)
        }
        return res.status(500).json({ message: 'Uh Oh! Something occurred...' })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = controller