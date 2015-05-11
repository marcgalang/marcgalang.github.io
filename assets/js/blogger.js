function getposts(){
	$.getJSON('entries.json', function(data){
		$.each(data.entries, function(key, val) { 
			$("#blog").append("<div id='"+key+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[key].date+"</p></small><h5>"+data.entries[key].title+"</h5><p>"+data.entries[key].text+"</p><hr/></div>");
		
			if (data.entries.length-1==key){
				found = [];
				for (i=0;i<=key;i++){
					found.push(i);
				};
				pager(0);
			};
		});
	 });
	 return false;
}	 

function pager(change){
	console.log("running pager");
	var page = Number($("#pg").html());
	page+=change;
	$("#pg").html(page);
	var count = found.length;
 	for (c=0;c<=$('div.blogpost').length;c++){
		$("#"+c+"").hide();
	}
	console.log("found has "+found.length+"items which include "+found)
	for (i=-5;i<=-1;i++){
		$("#"+[found[page*5+i]]+"").show();
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

function getselection(searchString){
	
	console.log("running 'get selection'");
	found = [];
	$("#pg").html(1);
	if (searchString){
		$('.hideOnSearch').hide();
		var s2="";
		for (i=0;i<searchString.length;i++){
			s2+=(searchString.charAt(i)+"\\s*");
		};
		s2+=(searchString.charAt(i));
		
		s2 = new RegExp(s2,"i");
		console.log('looking for "'+s2+'"');
		var count = $('div.blogpost').length;
		for (c=0;c<=count;c++){
			$("#"+c+"").hide();
			if($("#"+c+"").text().search(s2)>0){
				found.push(c);
			};
		};
		$("#hits").html("Search found "+found.length+" matches.");
		console.log(found);
		$("#hits").show();
		pager(0);
	} else {
		console.log("it's empty");
		$('.hideOnSearch').show();
		for (i=0;i<=$('div.blogpost').length;i++){
			found.push(i);
		};
		$("#hits").hide();
		pager(0);
	};
}	

	
