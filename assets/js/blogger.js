$(document).ready(function(){
	alert ("okay...");
});

function getposts(){
	$.getJSON('entries.json', function(data) {
		$.each(data.entries, function(key, val) {
alert( key + ": " + value );}}}

/* 	
			var data = getposts();
	  
			var output="";
			for (var i in data.entries){
			
			<!--     replace as needed below so it can create a big html string   
			output+="<div id="+i+" class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[i].date+"</p></small><h5>"+data.entries[i].title+"</h5><p>"+data.entries[i].text+"</p><hr/></div>";
			
			}
			document.getElementById("blog").innerHTML=output;
	 */