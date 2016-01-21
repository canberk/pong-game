 
$( document ).ready(function() {
	var genislik=$(document).width();
	 var kaydirma=(genislik-800)/2;
		kaydirma-=100;
		var puan=0;




	$(".giris").click(function(){	
		puan=0;
	 topHizX = 10, 
topHizY= 8; 
topY=Math.floor((Math.random() * 200) + 1)+200; 
topX=kaydirma+200;
cubukH=100;
		cubuk1H=100;
	$("#cubuk").css("height", cubukH+"px");
	$("#cubuk1").css("height", cubuk1H+"px");
	ana();
	 $('.giris').attr("disabled", true);

	zaman = Date.now();
setInterval(guncelle, 5);
	});

var ok = 0, zaman;
var diffTime = 0;
var alanX=kaydirma+100,
alanY=100, 
alanW=800, 
alanH=400, 
alanC="#000", 
topX=kaydirma+200, 
topY=Math.floor((Math.random() * 200) + 1)+200, 
topS=20, 
topC="#FFF", 
cubukX=kaydirma+150, 
cubukY=50,
cubukW=15, 
cubukH=100, 
cubukC="#FFF"; 
cubuk1X=kaydirma+830,
cubuk1Y=50, 
cubuk1W=15, 
cubuk1H=100, 
cubuk1C="#FFF"; 
var hizbelirleyici=0;
 
var topHizX = 10,
topHizY= 8; 
 
divYap();
	konumla();
 
function ana(){
guncelle();
}
 
function divYap(){
 

$("#alan").css({
position: 'absolute', 
top: alanY+"px",
left: alanX+"px",
width: alanW+"px",
height: alanH+"px",
backgroundColor: alanC
});
 

$("#top").css({
position: 'absolute', 
top: topY+"px",
left: topX+"px",
width: topS+"px",
height: topS+"px",
backgroundColor: topC
});
 

$("#cubuk").css({
position: 'absolute', 
top: cubukY+"px",
left: cubukX+"px",
width: cubukW+"px",
height: cubukH+"px",
backgroundColor: cubukC
});

$("#cubuk1").css({
position: 'absolute', 
top: cubuk1Y+"px",
left: cubuk1X+"px",
width: cubuk1W+"px",
height: cubuk1H+"px",
backgroundColor: cubuk1C
});
 
}
function konumla(){
$( "body" ).mousemove(function( e ) {
 
var tY = e.pageY; 
if(tY < alanY) 
tY=alanY;
else if(tY+cubukH > alanY+alanH )
tY=alanY+alanH-cubukH; 
 
cubukY=tY;
$("#cubuk").css("top", cubukY+"px");
cubuk1Y=tY;
$("#cubuk1").css("top", cubuk1Y+"px");
});

}
function guncelle(){
$(".puan").text("Puan: "+puan);
var tzaman = zaman;
zaman = Date.now();
 
diffTime += zaman - tzaman;
 
if(diffTime < 20)
return;
 
diffTime = 0;
 
 
if(!cubukCollision() && !cubuk1Collision()) 
alanCollision();
 
$("#top").css("left",topX);
$("#top").css("top",topY);
 }
 
function alanCollision(){
var yeniKonumX=topX+topHizX, yeniKonumY = topY+topHizY; 
 
var alanSol=alanX, alanSag=alanX+alanW, alanYukari=alanY, alanAsagi=alanY+alanH; 
 
if(yeniKonumX != topX){ 
if(yeniKonumX < alanSol){
	topHizX=0;
	topHizY=0;
	 $('.giris').attr("disabled", false);
}
else if(yeniKonumX+topS > alanSag){
	topHizX=0;
	topHizY=0;
	 $('.giris').attr("disabled", false);
}
else
topX=yeniKonumX; 
}
 
if(yeniKonumY != topY){ 
if(yeniKonumY < alanYukari){ 
topY = alanYukari;
topHizY= -topHizY; 
}
else if(yeniKonumY+topS > alanAsagi){
topY=alanAsagi-topS; 
topHizY= -topHizY; 
}
else
topY=yeniKonumY; 
}
}
 
 
 
 
 

function cubukCollision(){
var yeniKonumY=topY+topHizY, yeniKonumX = topX+topHizX; 
 
var cubukSol=cubukX, cubukSag=cubukX+cubukW, cubukYukari=cubukY, cubukAsagi=cubukY+cubukH;
 
if(yeniKonumX+topS > cubukSol && yeniKonumX < cubukSag){
if(yeniKonumY+topS > cubukYukari && yeniKonumY < cubukAsagi){ 
topHizX = -topHizX; 
topX = cubukSag+topS;
if(topHizX<18){
	topHizX+=0.2;
	topHizY+=0.2;
}else{
	$("#cubuk").css("height", cubukH-1+"px");
	cubukH--;
		$("#cubuk1").css("height", cubuk1H-1+"px");
	cubuk1H--;
	}
	puan+=parseInt(topHizX);
return true; 
 
}
}	

return false; 
}
 
 
function cubuk1Collision(){
var yeniKonum1Y=topY+topHizY, yeniKonum1X = topX+topHizX; 
 
var cubuk1Sol=cubuk1X, cubuk1Sag=cubuk1X+cubuk1W, cubuk1Yukari=cubuk1Y, cubuk1Asagi=cubuk1Y+cubuk1H;
 
if(yeniKonum1X+topS > cubuk1Sol && yeniKonum1X < cubuk1Sag){ 
if(yeniKonum1Y+topS > cubuk1Yukari && yeniKonum1Y < cubuk1Asagi){ 

topHizX = -topHizX; 
topX = cubuk1Sol-topS; 
if(topHizX>-18){
	topHizX-=0.2;
	topHizY-=0.2;
}else{
	$("#cubuk").css("height", cubukH-1+"px");
	cubukH--;
		$("#cubuk1").css("height", cubuk1H-1+"px");
	cubuk1H--;
	}
puan+=parseInt(-topHizX);
return true; 
}
}
return false;
}
 

function degmeVar(ma, mb, na, nb){
return (ma < nb && mb > na); 
}





});
