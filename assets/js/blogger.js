function getposts(){
	$.getJSON('entries.json', function(data){
		$.each(data.entries, function(key, val) { 
			$("#blog").append("<div id='"+key+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[key].date+"</p></small><h5>"+data.entries[key].title+"</h5><p>"+data.entries[key].text+"</p><hr/></div>");
			if (data.entries.length-1==key){
				pager(0);
			};
		});
	 });
	 return false;
}	 

function pager(change){
	var page = Number($("#pg").html());
	page+=change;
	$("#pg").html(page);
	var count = $('div.blogpost').length;
	console.log('blogposts now ='+count);
 	for (c=0;c<=count;c++){
		$("#"+c+"").hide();
		console.log("hiding id"+"#"+c+""); 
	}
	for (i=-5;i<=-1;i++){
		$("#"+[page*5+i]+"").show(200);
		console.log("showing #"+(page*5+i)); 
	}
	if (page ==1){
		$("#left").hide();
	}else{
		$("#left").show();
	}
	if (page ==Math.ceil(count/5)) {
		$("#right").hide();
	}else{
		$("#right").show();
	}
	return false;
}


	
