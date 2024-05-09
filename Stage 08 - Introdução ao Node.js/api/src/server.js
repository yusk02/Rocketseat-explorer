const express = require("express")

const app = express()
app.use(express.json())


// app.get("/message/:id/:user", (request, response) => {
//     const { id, user } = request.params

//     response.send(`
//     Id da mensagem: ${id}. 
//     Nome do usuário: ${user}.
//     `)
// })

// app.get("/users", (request, response) => {
//     const { page, limit } = request.query

//     response.send(`Página: ${page}. Mostrar: ${limit}`)
// })

app.post("/users", (request, response) => {
    const { name, email, password} = request.body

    response.json({ name, email, password})
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
