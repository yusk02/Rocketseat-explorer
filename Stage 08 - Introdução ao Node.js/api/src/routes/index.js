const { Router } = require("express")

const usersRouter = require("./users.routes")

const routes = Router()
routes.user("/users", usersRoutes)

module.exports = routes