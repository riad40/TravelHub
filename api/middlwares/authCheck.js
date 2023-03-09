const jwt = require('jsonwebtoken');

const authChecker = (req, res, next) => {
 
    // check if token exist on cookies
    const token = req.cookies.accessToken
    if (!token) {
        res.status(400).send({
            status: 400, 
            message: 'Log in first'
        })
    }  
    const userData = jwt.verify(token, process.env.JWT_SECRET)   
    req.user = userData
    next()
}    

module.exports = authChecker