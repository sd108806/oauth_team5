
function display(obj_changesets,sta_rgb_res,total_rgb)
{

document.write("<input type='button' name='aa' id='btn1' value='home' />");
document.getElementById("btn1").onclick=function(){
//alert("这里是单击事件");

window.location.href="index.html"  ;
//history.go(-1);
}

/*
document.write("obj_changesets.changesets.length " + obj_changesets.changesets.length);
document.write("obj_changesets.changesets[0].files.length " +obj_changesets.changesets[0].files.length );
*/



var dataset=new Array();
var k=0;

var dataset2=new Array();
var k2=0;


for (var i=0;i <obj_changesets.changesets.length; i++)
{
var unit2=new Object();
unit2.cx=35+35*i;
unit2.cy=20;
unit2.color='purple';

unit2.node=obj_changesets.changesets[i].node;
unit2.author=obj_changesets.changesets[i].author;
unit2.timestamp=obj_changesets.changesets[i].timestamp;
unit2.branch=obj_changesets.changesets[i].branch;
unit2.message=obj_changesets.changesets[i].message;

unit2.id=obj_changesets.changesets[i].node+"_rec";

dataset2[k2]=unit2;
k2++;

for ( var j=0; j< obj_changesets.changesets[i].files.length; j++)
{
var unit=new Object();
unit.cx=50+35*i;
unit.cy=70+35*j;

if(obj_changesets.changesets[i].files[j].type=='added'  )
unit.color='red';
if(obj_changesets.changesets[i].files[j].type=='modified'  )
unit.color='blue';
if(obj_changesets.changesets[i].files[j].type=='removed'  )
unit.color='green';

unit.files=obj_changesets.changesets[i].files[j];

unit.id=obj_changesets.changesets[i].node+"_cir"

dataset[k]=unit;
k++;
}
}
/*
document.write("dataset.length "+dataset.length);
document.write("dataset[0].cx "+dataset[0].cx);
document.write("dataset[0].cy "+dataset[0].cy);
document.write("dataset[1].cx "+dataset[1].cx);
document.write("dataset[1].cy "+dataset[1].cy);
*/

//Width and height  
            var  w  =  1500 ;  
            var  h  =  1500 ;  
			
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
                    return d.cy;  
               })  
               .attr("cy", function(d) {  
                    return d.cx;  
               })
               	.attr("r", 15)		   
               .style("fill", function(d) { return d.color; })
                .on("click", function(d) {
  
//alert("type "+d.files.type+"\n"+ "file "+d.files.file);

	
	svg.append("svg:text")
	    .attr("id",d.id+"_text")
	   .style("fill", d.color)
	   .style("writing-mode","tb")
	.append('svg:tspan')
     .attr("x", d.cy+25)             
	.attr("y", d.cx)
    .text("type "+d.files.type)
	.append('svg:tspan')
  .attr('dx', 20)
  .attr('y',d.cx)
.text("file "+d.files.file);
	
		$("#"+d.id+"_text").animate({opacity:0},6000);
	
	setTimeout(function(){ $("#"+d.id+"_text").remove();}, 6000);
	
	
	
//$("text").animate({opacity:0},6000);


});
				
				
				
				
				
          	
 svg.selectAll("rect")
		 .data(dataset2)  
               .enter() 
			.append("rect")    
        
         .attr("x", function(d) {  
                    return d.cy;  
               })  
         .attr("y", function(d) {  
                    return d.cx;  
               })  
        .attr("width", 30)
        .attr("height", 30)
			.style("fill", function(d) { return d.color; })
			.on("click", function(d) {
  /*
alert("node "+d.node+"\n"
+ "author "+d.author+"\n"
+ "timestamp "+d.timestamp+"\n"
+ "branch "+d.branch+"\n"
+ "message "+d.message+"\n"
);
*/

	svg.append("svg:text")
	   .attr("id",d.id+"_text")
	   .style("fill", d.color)
	   .style("writing-mode","tb")
	.append('svg:tspan')
     .attr("x", d.cy+40)             
	.attr("y", d.cx+40)
    .text("node "+d.node)
	.append('svg:tspan')
  .attr('dx', 20)
  .attr('y',d.cx)
.text("author "+d.author)
	.append('svg:tspan')
  .attr('dx', 20)
  .attr('y',d.cx)
.text("timestamp "+d.timestamp)
.append('svg:tspan')
  .attr('dx', 20)
  .attr('y',d.cx)
.text("branch "+d.branch)
.append('svg:tspan')
  .attr('dx', 20)
  .attr('y',d.cx)
.text("message "+d.message);
	
		$("#"+d.id+"_text").animate({opacity:0},6000);
	
	setTimeout(function(){ $("#"+d.id+"_text").remove();}, 6000);
	
	
	
	
});
			



}