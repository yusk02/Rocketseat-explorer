const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro ESPECÍFICO.
     * create  - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */
    async create(request, response) {
        const { name, email, password} = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE (?)", [email])

        if(checkUserExists) {
            throw new AppError("Este e-mail já está em uso.")
        }

        return response.status(201).json()
    }
}

module.exports = UsersController