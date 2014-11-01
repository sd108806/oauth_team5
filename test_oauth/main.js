

function main(input_path,start, limit,consumer_key_input,consumer_secrete_input)

{



//get_oauth();

/*
var obj_event=get_event(input_path );

document.write('obj_event.count  ' + obj_event.count+ '<br/>');
document.write('obj_event.events[0].node ' + obj_event.events[0].node+ '<br/>');
document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');
*/

var obj_changesets=get_changesets(input_path,start, limit,consumer_key_input,consumer_secrete_input );

/*
document.write('obj_changesets.count   ' + obj_changesets.count+ '<br/>');
document.write('obj_changesets.changesets[0].node ' + obj_changesets.changesets[0].node+ '<br/>');
document.write('obj_changesets.changesets[0].files[0].type  ' + obj_changesets.changesets[0].files[0].type+ '<br/>');
document.write('obj_changesets.changesets[0].utctimestamp  ' + obj_changesets.changesets[0].utctimestamp+ '<br/>');
document.write('obj_changesets.changesets[0].author  ' + obj_changesets.changesets[0].author+ '<br/>');
document.write('obj_changesets.changesets[0].parents[0]  ' + obj_changesets.changesets[0].parents[0]+ '<br/>');
document.write('obj_changesets.changesets[0].message  ' + obj_changesets.changesets[0].message+ '<br/>');
document.write('obj_changesets.changesets[0].size  ' + obj_changesets.changesets[0].size+ '<br/>');
document.write('obj_changesets.changesets[0].branches[0]  ' + obj_changesets.changesets[0].branches[0]+ '<br/>');

document.write('(obj_changesets.changesets[0].files).length  '+  (obj_changesets.changesets[0].files).length+ '<br/>'  + '<br/>'  );
*/
//document.write('obj_changesets.changesets[20].node ' + obj_changesets.changesets[20].node+ '<br/>');



var sta_rgb_res=sta_rgb(  obj_changesets    );
//document.write('obj_changesets.changesets.length   '+ obj_changesets.changesets.length + '<br/>');

for (var i=0;i<obj_changesets.changesets.length;i++)
//document.write( 'sta_rgb_res[i].rgb i= '+ i + '   ' +sta_rgb_res[i].r+ ' '+sta_rgb_res[i].g+ ' '+sta_rgb_res[i].b+ '<br/>');

//document.write('sta_rgb_res.length ' + sta_rgb_res.length + '<br/>');

var total_rgb=new Array(sta_rgb_res.length);

 total_rgb=get_total_rgb(sta_rgb_res);
/*
 for(var i=0;i<total_rgb.length;i++)
document.write('total_rgb[i] '+total_rgb[i]+ '<br/>');
*/

//graph(total_rgb);

display(obj_changesets,sta_rgb_res,total_rgb);
}