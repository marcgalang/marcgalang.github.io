function getposts(){
	console.log("getposts running...");
	console.log("getting json");
	$.getJSON('entries.json', function(data){
		$.each(data.entries, function(key, val) { 
			$("#blog").append("<div id='"+key+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[key].date+"</p></small><h5>"+data.entries[key].title+"</h5><p>"+data.entries[key].text+"</p><hr/></div>");
			});
	 });
	 
	return false;
	}	 


function pager(change){
	console.log("pager running...");
	var page = $("#pg").html();
	console.log("page before pager call"+page);
	page+=change;
	$("#pg").html(page);
	console.log("page after pager call"+$("#pg").html());
	var count = $('div.blogpost').length;
	//var count = 20;
	console.log('blogposts now ='+count);
 	for (c=0;c<=count;c++){
		$("#"+c+"").hide();
		console.log("hiding id"+"#"+c+""); 
	}
	for (i=0;i<=4;i++){
		$("#"+[page*5+i]+"").show();
		console.log("showing #"+(page*5+i)); 
	}
	if (page ==1){
		console.log("hiding left because page ="+page);
		$("#left").hide();
	}else{
		console.log("showing left because page ="+page);
		$("#left").show();
	}
	if (page >Math.ceil(count/5)) {
		console.log("hiding right because page ="+page);
		$("#right").hide();
	}else{
		console.log("showing right because page ="+page);
		$("#right").show();
	}
	return false;
}


	
