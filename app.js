const express = require('express')
const { getUser } = require('./Controller/getUser')
const postUser = require('./Controller/postUser')
const updateUser = require('./Controller/updateUser')
const deleteUser = require('./Controller/deleteUser')
require('dotenv').config();
const dblink = process.env.DATABASE_LINK
const PORT = process.env.PORT
console.log(dblink + " " + PORT);
const app = express()

app.route('/')
    .get(getUser)
    // .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

app.listen(3000, () => {
    console.log(`db connected ${PORT}`);
})