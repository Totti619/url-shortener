const helpers = {}

helpers.toIndexedSet = (array, field) => {
    const result = {}
    array.forEach((item) => {
        result[item[field]] = item 
    })
    return result
}

module.exports = helpers