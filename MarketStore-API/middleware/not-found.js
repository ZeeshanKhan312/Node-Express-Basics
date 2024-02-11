const notFound = (req, res) => res.status(404).send('<h2>Page you are looking for doesnt exist!!</h2>')

module.exports = notFound
