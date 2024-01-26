module.exports = function(app) {
    const userHandlers = require('./controllers/userController.js');
    const taskHandlers = require('./controllers/taskController.js');

    app.route('/auth/register')
        .post(userHandlers.register);
   app.route('/auth/sign_in')
        .post(userHandlers.sign_in);

    app.route('/task')
        .post(taskHandlers.createTask);
    // app.route('/task/complete')
    //     .post(taskHandlers.completeTask);
    // app.route('/task/edit')
    //     .post(taskHandlers.editTask);

    // app.route('/task/delete')
    //     .post(taskHandlers.deleteTask);

    app.route('/task')
        .get(taskHandlers.getTaskById);
    app.route('/tasks')
        .get(taskHandlers.getTasks);
    
};