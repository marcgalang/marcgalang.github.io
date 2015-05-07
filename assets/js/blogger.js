

function getposts(){
	$("#left").hide();
	console.log("hiding left button");
	$("#right").hide();
	console.log("hiding right button");
	$("#blog").hide();
	console.log("hiding blog");
	$.getJSON('entries.json', function(data){
		for (var i in data.entries){ 
			$("#blog").append("<div id='"+i+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[i].date+"</p></small><h5>"+data.entries[i].title+"</h5><p>"+data.entries[i].text+"</p><hr/></div>");	
			}
	 });
}

function pager(change){
	page+=change;
	var posts=$("#blog").childNodes;
	for (post in posts){
		$(post).hide();
	}
	for (i=0;i<=4;i++){
		$(posts[page*5+i]).show();
		console.log("we should show post #"+page*5);
	}
	if (page ==0){
		$("#left").hide();
	}else{
		$("#left").show();
	}
	if (page ==ceil(c.length/5)) {
		$("#right").hide();
	}else{
		$("#right").show();
	}
}

function displayBlog(){
	$("#blog").show();
	console.log("show blog");
	pager(0);
	
	
}