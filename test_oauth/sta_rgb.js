function sta_rgb(obj_changesets)
{



/*
var   obj_changesets={
'limit':3,
'changesets': [
{
'files':[{'type':'added',},]
},

{
'files':[ {'type':'added',}, {'type':'modified',},{'type':'modified',}]

},

{
'files':[ {'type':'removed',}, {'type':'removed',},{'type':'modified',}]

},


]
}
*/

//document.write('obj_changesets.changesets.length   '+ obj_changesets.changesets.length + '<br/>');






zero_unit_rgb={
'r': 0,
'g': 0,
'b': 0,
};

change_unit_rgb={
'r': 0,
'g': 0,
'b': 0,
};

var sta_arr_rgb=new Array();



for (var i=0; i< obj_changesets.changesets.length;  i++)
{

for(var j=0;j< (  (obj_changesets.changesets[i].files).length  );j++)
{
if(   obj_changesets.changesets[i].files[j].type=='added'     )
change_unit_rgb.r++;

if(   obj_changesets.changesets[i].files[j].type=='modified'     )
change_unit_rgb.b++;

if(   obj_changesets.changesets[i].files[j].type=='removed'     )
change_unit_rgb.g++;
}

//document.write( 'change_unit_rgb ' +change_unit_rgb.r +change_unit_rgb.g+change_unit_rgb.b+ '<br/>');

sta_arr_rgb[i]={};
sta_arr_rgb[i].r=change_unit_rgb.r;
sta_arr_rgb[i].g=change_unit_rgb.g;
sta_arr_rgb[i].b=change_unit_rgb.b;


//document.write( 'sta_arr_rgb[0].rgb i= ' + '   ' +sta_arr_rgb[0].r+ ' '+sta_arr_rgb[0].g+ ' '+sta_arr_rgb[0].b+ '<br/>');


change_unit_rgb.r=zero_unit_rgb.r;
change_unit_rgb.g=zero_unit_rgb.g;
change_unit_rgb.b=zero_unit_rgb.b;

//document.write('change_unit_rgb ' +change_unit_rgb.r +change_unit_rgb.g+change_unit_rgb.b);

//document.write('i am here');
}

//document.write('we are there');

/*
for (var i=0;i<obj_changesets.changesets.length;i++)
document.write( 'sta_arr_rgb[i].rgb i= '+ i + '   ' +sta_arr_rgb[i].r+ ' '+sta_arr_rgb[i].g+ ' '+sta_arr_rgb[i].b+ '<br/>');
*/




return sta_arr_rgb;



}