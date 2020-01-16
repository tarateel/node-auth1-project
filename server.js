const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const authRouter = require("./auth/auth-router.js")
const usersRouter = require("./users/users-router.js")

const server = express()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.use("/auth", authRouter)
server.use("/api/users", usersRouter)

server.get("/", (req, res, next) => {
  res.json({
    message: "Node Auth I Project",
  })
})

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong...'
  })
});

module.exports = server