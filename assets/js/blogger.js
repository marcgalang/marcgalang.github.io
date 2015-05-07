var page=0

function getposts(){
	$.getJSON('entries.json', function(data){
		for (var i in data.entries){ 
			$("blog").append("<div id="+i+" class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[i].date+"</p></small><h5>"+data.entries[i].title+"</h5><p>"+data.entries[i].text+"</p><hr/></div>");	
			}
	 });
}

function pager(change){
	page+=change;
	
}