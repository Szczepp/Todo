const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const User = require('./models/userModel');

const routes = require('./routes');
    routes(app);

const connection =  mongoose.connect('mongodb+srv://root:Szczepan4@learn.qnq7uuv.mongodb.net/?retryWrites=true&w=majority')
    .then( ()=> {
        console.log("connected to MongoDb");
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
        console.log("Server Listening on PORT:", PORT);

        app.get("/", (req, res) => {
        const status = {
            "Status": "Running"
        };
        res.send(status);
        });

       

        // app.use(function(req, res) {
        //     res.status(404).send({ url: req.originalUrl + ' not found' })
        //   });
    });
    

  }).catch( (err) => {
    console.log(err);
    return;
});;