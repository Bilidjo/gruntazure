
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , config = require('./config')()
  , azure = require('azure');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(config.port, function(){
  console.log("Express server listening on port " + config.port);
});

process.env.AZURE_SERVICEBUS_NAMESPACE= "moneypush";
process.env.AZURE_SERVICEBUS_ACCESS_KEY= "5WunwLi44ixSR91Ev0Gpvee73oxyVKlVCC/i4aYOxTA=";

var serviceBusService = azure.createServiceBusService();

/*var message = {
    body: 'Test message',
    customProperties: {
        testproperty: 'TestValue'
    }
};
serviceBusService.sendQueueMessage('ordersqueue', message, function(error){
    if(!error){
        console.log("le message a été envoyé via service bus"); // message sent
    }
});*/
