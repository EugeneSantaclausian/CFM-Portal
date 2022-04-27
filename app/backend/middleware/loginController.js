const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.use(express.urlencoded({ extended: true })); //Body Parser
router.use(express.json()); //Body Parser
require("dotenv").config();

//GENERATE TOKEN
const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "7d" });
};

//AUTHENTICATE TOKEN
/*const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET as String, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }
*/

//LOGIN POST REQUEST
router.post("/", (req, res) => {
  // Validate User Here Then Return Token
  const email = req.body.email;
  const password = req.body.password;
  if (email === process.env.EMAIL && password === process.env.PASSWORD) {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const token = generateAccessToken(data);
    return res.status(200).json({
      id: "1",
      token: token,
      expiresIn: "168h",
    });
  } else if (email !== process.env.EMAIL) {
    return res.status(400).json({ message: "Email cannot be verified" });
  } else if (password !== process.env.PASSWORD) {
    return res.status(400).json({ message: "Password cannot be verified" });
  } else {
    return res.status(400).json({ message: "User cannot be verified" });
  }
});

module.exports = router;
