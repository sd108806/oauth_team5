

function get_changesets(input_path, start_input,limit_input,consumer_key_input,consumer_secrete_input)
{

var limit=50;   //default value
if(limit_input!=""   &&  limit_input>0   && limit_input<50)
limit=limit_input;



var consumer_key="";
var consumer_secrete="";

if(consumer_key_input=="" || consumer_secrete_input=="")
{
consumer_key="zrB43B3MSYDfY3kkK6";
consumer_secrete="ArcubcBnGjHstAcFuk6k4mQqVgvCJaX7";
}
else{
consumer_key= consumer_key_input;
consumer_secrete=consumer_secrete_input;
}


var test_opts={

consumer: {public:consumer_key,secret:consumer_secrete},
signature_method:  'PLAINTEXT',
nonce_length:   29  ,
version:  '1.0'    ,
parameter_seperator: ', ' ,
};

var myoauth=new OAuth(test_opts);

myoauth.nonce=myoauth.getNonce();

myoauth.signature=myoauth.consumer.secret+'%26' ;

myoauth.timestamp=myoauth.getTimeStamp();

if(start_input=="")
{var my_changesets_string='https://bitbucket.org/api/1.0/repositories/'+ input_path +'/changesets/?'
+"limit="+limit+"&"
+"oauth_signature_method="+myoauth.signature_method+"&"
+'oauth_nonce='+myoauth.nonce+'&'
+"oauth_timestamp="+myoauth.timestamp+"&"
+"oauth_version="+myoauth.version+"&"
+'oauth_consumer_key='+myoauth.consumer.public+'&'
+"oauth_signature="+myoauth.signature}
//document.write('my_event_string  ' + my_event_string+'<br/>');
else
{var my_changesets_string='https://bitbucket.org/api/1.0/repositories/'+ input_path +'/changesets/?'
+"start="+start_input+"&"
+"limit="+limit+"&"
+"oauth_signature_method="+myoauth.signature_method+"&"
+'oauth_nonce='+myoauth.nonce+'&'
+"oauth_timestamp="+myoauth.timestamp+"&"
+"oauth_version="+myoauth.version+"&"
+'oauth_consumer_key='+myoauth.consumer.public+'&'
+"oauth_signature="+myoauth.signature}
//document.write('my_event_string  ' + my_event_string+'<br/>');



	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open('GET',my_changesets_string,false);
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