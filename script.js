$(document).ready(function() { 

vecKliknuto = false;

clickButton=function() {
	if(vecKliknuto == false) {
		document.getElementById("demo").innerHTML=document.getElementById('demo').innerHTML+Date();
		vecKliknuto = true;
		$("#botun").html("Pritisnuo");
	} else {
		console.log('vec je klknuto');
	}
	
	
	
	//document.getElementById("botun").onclick="";
}
govno=function() {
	$("#demo, #botun").css('color', 'red');
}
govnout=function() {
	$("#demo, #botun").css("color", "black");
}
});