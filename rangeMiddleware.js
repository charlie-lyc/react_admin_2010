module.exports = (req, res, next) => {
    // For Pagination
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range', 'posts 0-20/20') 
    next()
}