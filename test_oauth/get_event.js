

function get_event(input_path)
{


var test_opts={

consumer: {public:"zrB43B3MSYDfY3kkK6",secret:"ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7"},
signature_method:  'PLAINTEXT',
nonce_length:   29  ,
version:  '1.0'    ,
parameter_seperator: ', ' ,

};

var myoauth=new OAuth(test_opts);

myoauth.nonce=myoauth.getNonce();

myoauth.signature=myoauth.consumer.secret+'%26' ;

myoauth.timestamp=myoauth.getTimeStamp();

var my_event_string='https://bitbucket.org/api/1.0/repositories/'+ input_path +'/events/?'
+"oauth_signature_method="+myoauth.signature_method+"&"
+'oauth_nonce='+myoauth.nonce+'&'
+"oauth_timestamp="+myoauth.timestamp+"&"
+"oauth_version="+myoauth.version+"&"
+'oauth_consumer_key='+myoauth.consumer.public+'&'
+"oauth_signature="+myoauth.signature
//document.write('my_event_string  ' + my_event_string+'<br/>');


	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open('GET',my_event_string,false);
	xmlhttp.send();
	xmldoc=xmlhttp.responseText;

	/*
	document.write('xmlhttp.responseText'+xmlhttp.responseText+'<br/>'+'<br/>');
document.write('xmldoc ' + xmldoc+'<br/>'+'<br/>');
document.write('<br/>'+'<br/>'+'<br/>');
*/

if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
//document.write('request is success  ' + '<br/>');

//document.write('xmldoc  ' + xmldoc  +'<br/>'+'<br/>'+'<br/>');

 var obj = eval('(' + xmldoc + ')'); ;


//document.write('obj.count  ' +'<br/>'+ obj.count+ '<br/>'+ '<br/>'+ '<br/>');


//document.write('obj.events[0].node  ' + obj.events[0].node+ '<br/>');

//document.write('obj.events[0].description.commits[0].description ' + obj.events[0].description.commits[0].description+ '<br/>');

}



return  obj;


}