const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const key = "password_password"

// hashing
const hashingPass = (password) => {
    return bcrypt.hashSync(password, 8)
}

const compareHashingToPass = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

// jwt
const signPayload = (payload) => {
    return jwt.sign(payload, key)
}

const verifyToken = (token) => {
    return jwt.verify(token, key)
}

module.exports = {
    hashingPass,
    compareHashingToPass,
    signPayload,
    verifyToken
}