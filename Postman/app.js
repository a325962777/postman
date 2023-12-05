
const express = require('express'); 
const app = express(); 


const worker = require("./controllers/workers");
const course = require("./controllers/courses");


// app.get('/',(req,res)=>{
//     res.send(console.log("hi"))
// });


app.use(worker);
app.use(course);
app.listen(2000,()=>{
    
})
// app.listen(3000, (error) => { 
//     if(!error)
// 	    console.log("listening on http://localhost:3000"); 
//     else
//         console.log("error ::((",error);
// });



 
