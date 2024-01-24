const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name: String,
        completed: Boolean
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;