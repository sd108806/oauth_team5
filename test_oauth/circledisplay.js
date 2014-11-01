
function display(obj_changesets,sta_rgb_res,total_rgb)
{

document.write("<input type='button' name='aa' id='btn1' value='home' />");
document.getElementById("btn1").onclick=function(){
//alert("这里是单击事件");

window.location.href="index.html"  ;
//history.go(-1);
}


document.write("obj_changesets.changesets.length " + obj_changesets.changesets.length);
document.write("obj_changesets.changesets[0].files.length " +obj_changesets.changesets[0].files.length );




var dataset=new Array();
var k=0;

for (var i=0;i <obj_changesets.changesets.length; i++)
{
for ( var j=0; j< obj_changesets.changesets[i].files.length; j++)
{
var unit=new Object();
unit.cx=50+20*i;
unit.cy=50+20*j;

if(obj_changesets.changesets[i].files[j].type=='added'  )
unit.color='red';
if(obj_changesets.changesets[i].files[j].type=='modified'  )
unit.color='blue';
if(obj_changesets.changesets[i].files[j].type=='removed'  )
unit.color='green';

unit.file=obj_changesets.changesets[i].files[j].file;

dataset[k]=unit;
k++;
}
}

document.write("dataset.length "+dataset.length);
document.write("dataset[0].cx "+dataset[0].cx);
document.write("dataset[0].cy "+dataset[0].cy);
document.write("dataset[1].cx "+dataset[1].cx);
document.write("dataset[1].cy "+dataset[1].cy);


//Width and height  
            var  w  =  1200 ;  
            var  h  =  1000 ;  
			
		    //Create SVG element  
            var  svg  =  d3 .select("body")  
                        .append("svg")  
                        .attr("width", w)  
                        .attr("height", h);  
  
            svg.selectAll("circle")  
               .data(dataset)  
               .enter()  
               .append("circle")  
               .attr("cx", function(d) {  
                    return d.cx;  
               })  
               .attr("cy", function(d) {  
                    return d.cy;  
               })
               	.attr("r", 9)		   
               .style("fill", function(d) { return d.color; });
  
          	




}