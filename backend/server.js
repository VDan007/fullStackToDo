const PORT = 8888;
const pool = require('./db.js');
const express = require('express');
const app = express();
app.listen(PORT,()=> console.log(  `Server running on port ${PORT}` ) );

//get all todos
app.get('/todos', async (req,res) => {

    try{
      const todos = await pool.query('select * from todos');
      res.json(todos.rows);

    }catch(err){
        console.error(err);
    }
});