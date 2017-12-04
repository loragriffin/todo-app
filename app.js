var express = require('express');

var app = express();

// temporary - will replace with database
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'buy new shoes'}];

app.set('view engine', 'hbs');

app.use('/static', express.static('public'));

app.get('/', function(request, response) {
  response.redirect('/todos');
});

app.get('/todos', function (request, response) {
  response.render('main', {todos: data})
});

// app.get('/todos/add', function (request, response) {
//
// });
//
// app.get('/todo/done/:id', function (request, response) {
//
// });
//
// app.post('/todo' function (request, response) {
//
// })
//

app.listen(8000, function() {
    console.log('Listening on port 8000');
});
