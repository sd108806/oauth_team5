




function get_oauth(){


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//Get   Request token part
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var test_opts={

consumer: {public:"zrB43B3MSYDfY3kkK6",secret:"ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7"},
signature_method:  'PLAINTEXT',
nonce_length:   29  ,
version:  '1.0'    ,
parameter_seperator: ', ' ,

};


/*
document.write("test_opts.consumer.public   " + test_opts.consumer.public + "<br/>");
document.write("test_opts.signature_method   " + test_opts.signature_method + "<br/>");
document.write("test_opts.nonce_length " + test_opts.nonce_length + "<br/>");
document.write("test_opts.version   " + test_opts.version + "<br/>");
document.write("test_opts.parameter_seperator   " + test_opts.parameter_seperator + "<br/>"+"<br/>"+"<br/>");
*/


var myoauth=new OAuth(test_opts);


document.write("myoauth.consumer.public   " + myoauth.consumer.public + "<br/>");
document.write("myoauth.signature_method   " + myoauth.signature_method + "<br/>");
document.write("myoauth.nonce_length " + myoauth.nonce_length + "<br/>");
document.write("myoauth.version   " + myoauth.version + "<br/>");
document.write("myoauth.parameter_seperator   " + myoauth.parameter_seperator + "<br/>"+"<br/>"+"<br/>");

myoauth.nonce=myoauth.getNonce();

document.write("myoauth.nonce   " + myoauth.nonce + "<br/>");
/*
document.write("myoauth.getNonce()   " + myoauth.getNonce() + "<br/>");

document.write("myoauth.percentEncode   " + myoauth.percentEncode("ab!gcde") + "<br/>");
*/


var myrequest={
 
 method: "POST",
 url: "http://bitbucket.org/api/1.0/oauth/request_token",
  
  data: '',
};


//document.write("myrequest.data.consumer.key  " + myrequest.data.consumer.key + "<br/>");



var mytoken={};

//myoauth.authorize(myrequest,mytoken);

/*
document.write("myoauth.authorize().oauth_timestamp   " + myoauth.authorize(myrequest,mytoken).oauth_timestamp + "<br/>");
document.write("myoauth.authorize().oauth_signature  " + myoauth.authorize(myrequest,mytoken).oauth_signature + "<br/>");
document.write("myoauth.authorize.oauth_signature " + myoauth.authorize.oauth_signature + "<br/>"+"<br/>"+"<br/>");
*/

// for paintext signatuere = consumer_secrete+ &+ token_secrete

myoauth.signature=myoauth.percentEncode(  myoauth.authorize(myrequest,mytoken).oauth_signature  ) ;
document.write("myoauth.signature " + myoauth.signature + "<br/>");

myoauth.timestamp=myoauth.getTimeStamp();
document.write("myoauth.timestamp " + myoauth.timestamp + "<br/>");

myoauth.callback=myoauth.percentEncode("http://local/dump");
document.write("myoauth.callback " + myoauth.callback + "<br/>");
/*
document.write("myoauth.getBaseUrl(http://local/dump) " + myoauth.getBaseUrl("http://local/dump")+ "<br/>");
*/



// create the url for post request token call
var my_request_token_string="https://bitbucket.org/api/1.0/oauth/request_token?"
+"oauth_signature_method="+myoauth.signature_method+"&"
+"oauth_version="+myoauth.version+"&"
+"oauth_timestamp="+myoauth.timestamp+"&"
+"oauth_signature="+myoauth.signature+'&'
+'oauth_consumer_key='+myoauth.consumer.public+'&'
+'oauth_nonce='+myoauth.nonce+'&'
+'oauth_callback='+myoauth.callback;
document.write('my_request_token_string '+my_request_token_string+'<br/>');



  // make a xmlhttp request call note: phonegap only allow xmlhttprequest function in crossdomain but ajax,jsonp, getjson
	
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open('post',my_request_token_string,false);
	xmlhttp.send(null);
	xmldoc=xmlhttp.responseText;
document.write('xmlhttp.responseText  '+xmlhttp.responseText+'<br/>'+'<br/>');
document.write('xmldoc ' + xmldoc+'<br/>'+'<br/>');
document.write('<br/>'+'<br/>'+'<br/>');

	
	
		var n1=xmldoc.indexOf('&',0);  // find the location of the first '&'
			document.write('n1 '+n1+'  ' );
			var request_oauth_token_secrete=xmldoc.substring(0,n1);   // get oauth token secrete
			document.write('request_oauth_token_secrete '+ request_oauth_token_secrete +'  ');
			
			var n2=xmldoc.indexOf('&',n1+1);   // find the location of the second '&'
			document.write('n2 '+n2 +'  ');
			var request_oauth_token=xmldoc.substring(n1+1,n2);   // get oauth token secrete
			document.write('request_oauth_token '+ request_oauth_token +'<br/>'+'<br/>');
			
			
			
		
			
			
			
				
			
			}





