const express = require('express')
const Controller=require('./Controller')
const dblink=process.env.DATABASE_LINK
const PORT=process.env.PORT
console.log(dblink+" "+PORT);
const app = express()

app.route('/')
    .get(Controller.getUser)
    .post(Controller.postUser)
    .patch(Controller.updateUser)
    .delete(Controller.deleteUser)

app.listen(3000,()=>{
    console.log(`db connected ${PORT}`);
})