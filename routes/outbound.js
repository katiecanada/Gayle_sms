var twilio = require('twilio')


//constants
var TWILIO_ACCOUNT_SID = 'ACb8fa86f03ac4641c57ace2c27c643606'  
var TWILIO_AUTH_TOKEN = '5d3d38f11c7736c79a595f54bac651fd'
var TWILIO_NUMBER = '+16506660994'



exports.send = function(req, res){
	// Create a new REST API client to make authenticated requests against the
	// twilio back end
	var client = new twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
	// Pass in parameters to the REST API using an object literal notation. The
	// REST client will handle authentication and response serialzation for you.
	client.sms.messages.create({
    	to:'+16506448650',
		from:TWILIO_NUMBER,
		body:'ahoy hoy! Testing Twilio and node.js'
	}, function(error, message) {
    	// The HTTP request to Twilio will run asynchronously. This callback
		// function will be called when a response is received from Twilio
		// The "error" variable will contain error information, if any.
		// If the request was successful, this value will be "falsy"
		if (!error) {
        	// The second argument to the callback will contain the information
			// sent back by Twilio for the request. In this case, it is the
			// information about the text messsage you just sent:
			console.log('Success! The SID for this SMS message is:');
			console.log(message.sid);
 
			console.log('Message sent on:');
			console.log(message.dateCreated);
			res.end('message sent');
		} else {
    		console.log(error);
			console.log('Oops! There was an error.');
			res.end('message error');
		}
	});
}