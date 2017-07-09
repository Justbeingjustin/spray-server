#spray-server



# Client 1 example

var socket = require('socket.io-client')('https://immense-refuge-33541.herokuapp.com');
socket.on('message-from-server', function(evt){
	console.log(evt.greeting);
});

# Deploy Repo to Heroku

https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app


# Creates new application
heroku create

# Push Repo to Heroku
git push heroku master
