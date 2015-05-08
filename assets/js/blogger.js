function getposts(){
	console.log("getposts running...");
	console.log("getting json");
	$.getJSON('entries.json', function(data){
		$.each(data.entries, function(key, val) { 
			$("#blog").append("<div id='"+key+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[key].date+"</p></small><h5>"+data.entries[key].title+"</h5><p>"+data.entries[key].text+"</p><hr/></div>");	
			console.log($('div.blogpost').length);
			});
	 });
	}	 


function pager(change){
	console.log("pager running...");
	if (change==0){
		var page = 0;
	}
	page+=change;
	var count = $('div.blogpost').length;
 	for (c in count){
		$("#"+c+"").hide();
		console.log("hiding #"+c); 

	}
	for (i=0;i<=4;i++){
		$("#"+[page*5+i]+"").show();
		console.log("showing #"+(page*5+i)); 
	}
	if (page ==0){
		$("#left").hide();
	}else{
		$("#left").show();
	}
	if (page ==Math.ceil(count/5)) {
		$("#right").hide();
	}else{
		$("#right").show();
	}
}


	
