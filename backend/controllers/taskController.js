const mongoose = require('mongoose');
const Task = mongoose.model('Task');


exports.createTask = async (req, res) => {
    console.log(req.body); 
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch(err) {
        console.log(err.message);
    }
};

exports.getTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json(err.message);
        console.log(err.message);
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findById(id)
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json(err.message);
        console.log(err.message);
    }
};