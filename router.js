const express = require("express");
const router =  express.Router();
const TodoController=require("./controllers/TodoController");

router.get('/',(_req,res)=>{
    res.send("ok")
})

router.get('/todos', TodoController.getAll);
router.post('/todo', TodoController.create);
router.delete('/todo/:id',TodoController.deleteTodo);
router.put('/todo/:id',TodoController.update);
router.patch('/todo/:id',TodoController.done);


module.exports=router