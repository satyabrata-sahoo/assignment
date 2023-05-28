const jwt = require("jsonwebtoken")
const adminModel = require("../schema/adminSchema");

 var checkUserAuth = async (req, res, next) => {
    let token
    const { authorization } = req.headers
    if (authorization && authorization.startsWith('Bearer')) {
      try {
        // Get Token from header
        token = authorization.split(' ')[1]
  
        // Verify Token
        const { adminId } = jwt.verify(token, process.env.JWT_SECRET_KEY)
  console.log(adminId)
        // Get User from Token
        req.user = await adminModel.findById(adminId).select('-password -token')
  console.log(req.user )
        next()
      } catch (error) {
        console.log(error)
        res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
      }
    }
    if (!token) {
      res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
    }
  }
 module.exports = checkUserAuth;