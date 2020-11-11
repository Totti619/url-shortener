const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/urlshortener"
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.")
})