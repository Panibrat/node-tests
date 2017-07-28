const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.status(200).send('Hello world?');
    res.status(200).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
});

});
app.get('/users', (req, res) => {
    res.status(200).send([
    {name: "Alexander",
    age: 36},
    {name: "Katya",
    age: 18},
    {name: "Vasya",
    age: 45}
]);

});

app.listen(3000, () => {
    console.log('server starting on poooort 3000');
});

module.exports.app = app;