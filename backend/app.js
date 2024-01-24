const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');
const Task = require('./models/taskModel');

const connection =  mongoose.connect('mongodb+srv://root:Szczepan4@learn.qnq7uuv.mongodb.net/?retryWrites=true&w=majority')
    .then( ()=> {
        console.log("connected to MongoDb");
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
        console.log("Server Listening on PORT:", PORT);

        app.get("/", (request, response) => {
        const status = {
            "Status": "Running"
        };
        response.send(status);
        });

        app.post("/task", async(request, response) => {
            console.log(request.body); 
            try {
                const task = await Task.create(request.body);
                response.status(200).json(task);
            } catch(err) {
                console.log(err.message);
            }

            response.send("Created task. Success");
            });

        app.get("/tasks", async(request, response) => {
            try {
                const tasks = await Task.find({});
                response.status(200).json(tasks);
            } catch(err) {
                response.status(500).json(err.message);
                console.log(err.message);
            }
            });

        app.get("/task/:id", async(request, response) => {
            try {
                const {id} = request.params;
                const tasks = await Task.findById(id)
                response.status(200).json(tasks);
            } catch(err) {
                response.status(500).json(err.message);
                console.log(err.message);
            }
            });
    });

  }).catch( (err) => {
    console.log(err);
    return;
});;