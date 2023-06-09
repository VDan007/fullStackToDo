const PORT = 8888;
const pool = require('./db.js');
const express = require('express');
const app = express();
app.listen(PORT,()=> console.log(  `Server running on port ${PORT}` ) );
app.use(express.static("dist"));

//get all todos
app.get('/todos/:userEmail', async (req,res) => {
    //console.log(req);
    const userEmail = req.params.userEmail;
    //console.log(req.params.userEmail);

    try{
      const todos = await pool.query('select * from todos where user_email=$1',[userEmail]);
      res.json(todos.rows);

    }catch(err){
        console.error(err);
    }
});

app.get('/test',(req,res)=>{
  const message = 'hiii';
  res.json(message);
})