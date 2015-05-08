

function getposts(){
	console.log("getposts running...");
	console.log($("#blog").children().length);
	if ($("#blog").children().length<2){
		$("#left").hide();
		console.log("hiding left button");
		$("#right").hide();
		console.log("hiding right button");
		console.log("getting json");
		$.getJSON('entries.json', function(data){
			for (var i in data.entries){ 
				$("#blog").append("<div id='"+i+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[i].date+"</p></small><h5>"+data.entries[i].title+"</h5><p>"+data.entries[i].text+"</p><hr/></div>");	
				}
		 });
			$("#blog").hide();
			console.log("hiding blog");
		}	 
}

function pager(change){
	if (change==0){
		var page = 0;
	}
	console.log("pager running...");
	page+=change;
	var count = $("#blog").children().length;
	for (c in count){
		$("#"+c+"").hide();
	}
	for (i=0;i<=4;i++){
		$("#"+[page*5+i]+"").show();
		console.log("we should show post #"+page*5);
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

function displayBlog(){
	console.log("displayBlog running...");
	$("#blog").show();
	console.log("show blog");
	pager(0);
	
	
}