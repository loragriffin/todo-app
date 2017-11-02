var express = require('express');

var app = express();


app.set('view engine', 'hbs');

app.use('/static', express.static('public'));

app.get('/', function(request, response) {
  response.redirect('/todos');
});
app.get('/todos', function (request, response) {
    response.send('');
});
app.get('/todos/add', function (request, response) {
    response.send('');
});
app.get('/todo/done/:id', function (request, response) {
    response.send('');
});


app.listen(8000, function() {
    console.log('Listening on port 8000');
});
