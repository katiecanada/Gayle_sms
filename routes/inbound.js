var twilio = require('twilio')

exports.receive = function(req, res){
	var resp = new twilio.TwimlResponse();
	resp.message('ahoy hoy! Testing Twilio and node.js');
	    //Render the TwiML document using "toString"
    res.writeHead(200, {
        'Content-Type':'text/xml'
    });
    res.end(resp.toString());
}