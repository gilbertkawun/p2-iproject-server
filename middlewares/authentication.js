const { User } = require("../models")
const { verifyToken } = require("../helpers/helpers")
const { JsonWebTokenError } = require("jsonwebtoken")

const authentication = async (req, res, next) {
    try {
        const { access_token } = req.headers
        
        if (!access_token) {
            throw { name: JsonWebTokenError }
        }
        const payload = verifyToken(access_token);
        const user = await User.findByPk({
            where: payload.id
        })
        req.currentUSer = {
            id: user.id,
            email: user.email,
            username: user.username
        }
        if (!user && !access_token) {
            throw { name: "Unauthorized" };
          } else {
            next();
          }
    } catch (err) {
        next(err)
    }
}