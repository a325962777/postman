const { Router } = require('express');
const { route } = require('./workers');
const app = Router();
const fsPromises = require("fs").promises;

async function getCourses() {
    const listCourses = JSON.parse(await fsPromises.readFile('./data/courses.json'));
    console.log(listCourses);
    app.get('/data/courses/:coursId', (req, res) => {
        const id = Number(req.params.coursId)
        const courses = listCourses.find(c => c.coursId === id);
        res.json(courses);
    })

    app.get('/data/courses', (req, res) => {
        res.send(listCourses);
    })
}
getCourses();
module.exports = app;