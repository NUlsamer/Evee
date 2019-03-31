var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

// include the routes file
var auth = require('./routes/user/auth');
var users = require('./routes/user/users');
var routes = require('./routes/route');
var events = require('./routes/events');
var chats = require('./routes/chats');

////////
app.use('/', routes);
app.use('/auth', auth);
app.use('/users', users);
app.use('/events', events);
app.use('/chats', chats);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});