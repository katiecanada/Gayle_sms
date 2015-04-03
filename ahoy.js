//this file will send and receive twilio sms messages

//constants
var TWILIO_ACCOUNT_SID = 'AC56a49b468fb2d647fc64e6bcb1c10e14'  //test account info. TODO: replace
var TWILIO_AUTH_TOKEN = '07814df56e552f23aea647d4ad787197'
//var TWILIO_NUMBER = '+16506660994'
var TWILIO_NUMBER = '+15005550006'

// Load the twilio module
var twilio = require('twilio');
 
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
    } else {
    	console.log(error);
        console.log('Oops! There was an error.');
    }
});
