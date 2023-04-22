const PORT = 8888;
const express = require('express');
const app = express();
app.listen(PORT,()=> console.log(  `Server running on port ${PORT}` ) );

//get all todos
app.get('/todos', async (req,res) => {

    try{
       // await 
    }catch(err){
        console.error(err);
    }
});