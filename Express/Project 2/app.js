const express = require('express');
const app = express();
const PORT = 8001;

app.get('/user',(req,res)=>{
    res.status(200);
    res.send('person.json')
});

app.listen(PORT,(error) =>{
    if(!error)
        
        console.log("server is successfull , app on port is"+PORT);
    else
        console.log("error",error);

});

// const app = express();
// const PORT = 5001;

app.get('/worker',(req,res)=>{
    res.status(200);
    res.send('person.json')
});

app.listen(PORT,(error) =>{
    if(!error)
        if(person.age>20)
            console.log("server is successfull , app on port is"+PORT);
        else
            console.log("the person age is small");
    else
        console.log("error",error);

})
