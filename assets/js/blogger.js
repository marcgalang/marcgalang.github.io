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
 	for (c=0;c<=count;c++){
		$("#"+c+"").hide();
	}
	for (i=-5;i<=-1;i++){
		$("#"+[page*5+i]+"").show(400);
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

function getselection(){
	console.log("running 'get selection'");
	if ($("search2").val()=null){
		console.log("it's empty");
		return false;
	}
	
	var s2 = new RegExp($("search2").val(),"i")
	console.log('looking for "'+s2+'"');
	var count = $('div.blogpost').length;
	for (c=0;c<=count;c++){
	console.log($("#"+c+""));
	}
}
	
