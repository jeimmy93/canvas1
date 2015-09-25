$(function()
{
	var canvas = $("#canvas");
	var context=canvas[0].getContext("2d");

 l = [[30, 30,300, 30],
      [30, 30,30, 300],
      [30, 150,150, 150],
      [30, 300,300, 300]];

var letras= function(le){
  

   context.beginPath();
   context.moveTo(le[0],le[1]);
   context.lineTo(le[2], le[3]);
   context.lineWidth = 10;
   context.strokeStyle = "black";
   context.stroke();

}
//context.moveTo(30, 30);
 //context.lineTo(300, 30);

for(var i=0;i<l.length; i++){
	letras(l[i]);
	console.log(i);

}

});