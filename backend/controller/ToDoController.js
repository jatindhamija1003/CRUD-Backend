const ToDoModel = require("../models/ToDoModel")

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos)
}

module.exports.saveToDo = (req, res) => {
    const { toDo } = req.body
    ToDoModel.create({ toDo })
        .then(data => {
            console.log("Saved Success")
            res.status(201).send(data)
        })

        .catch(err => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong! Try Again" })
        })
}

module.exports.updateToDo = (req, res) => {
    const { id } = req.params
    const { toDo } = req.body
    ToDoModel.findByIdAndUpdate(id, { toDo })
        .then(data => {
            console.log("Update Success")
            res.send("Update Success")
        })

        .catch(err => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong! Try Again" })
        })
}

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params
    ToDoModel.findByIdAndDelete(id)
        .then(() => {
            console.log("Delete Success")
            res.send("Delete Success")
        })

        .catch(err => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong! Try Again" })
        })
}
