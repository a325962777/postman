// const express = require('express');

const{ Router }=require('express');
const app =Router();

// json קריאה מקובץ
const fsPromises = require("fs").promises;
// const path = require("path");


app.get('/workers/:id', async (req,res) =>{
console.log("hi");
    const data = await fsPromises.readFile("./data/workers.json")
    const workers= JSON.parse(data);

    const id = Number(req.params.id);
    const worker = workers.find(worker => worker.id===id);

    if (!workers) {
        return res.status(404).send('worker not found :(')
    }
    res.json(worker);
});
// async function workersList(res){
//     try{
//         const workers = JSON.parse(await fsPromises.readFile("./workers.json"))
//         let workerArray=[];
//         workers.forEach(w=>{
//                 workerArray.push(`${w.id} ${w.name} , phone: ${w.phone},email: ${w.email} \n`);
            
                
//         });
//         res.send(`list of workers: ${workerArray}`);
//         }catch(e){
//             res.send(`error: ${e}`);
//         }
// }
// workers.get('/workers',(req,res)=>{
//     // const {name} = req.name; 
//     workersList(res);
// });


 
module.exports = app;
// 	res.send("Home") 
// };



// בהגרדת האקספרס 
// const{Router}=require(express)

// const app=Router();