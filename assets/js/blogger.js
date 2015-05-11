function getposts(){
	$.getJSON('entries.json', function(data){
		$.each(data.entries, function(key, val) { 
			$("#blog").append("<div id='"+key+"' class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[key].date+"</p></small><h5>"+data.entries[key].title+"</h5><p>"+data.entries[key].text+"</p><hr/></div>");
		
			if (data.entries.length-1==key){
				var found = [];
				for (i=0;i<=key;i++){
					found.push(i);
				};
				$("#found").data(found);
				pager(0);
			};
		});
	 });
	 return false;
}	 

function pager(change){
	console.log("running pager");
	var page = Number($("#pg").html());
	var found = $("#found").data();
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

function getselection(){
	
	console.log("running 'get selection'");
	var found = [];
	$("#pg").html(1);
	if ($("#search2").val()){
		$('.hideOnSearch').hide();
		var s2 = new RegExp($("#search2").val(),"i")
		console.log('looking for "'+s2+'"');
		var count = $('div.blogpost').length;
		for (c=0;c<=count;c++){
			$("#"+c+"").hide();
			if($("#"+c+"").text().search(s2)>0){
				found.push(c);
				console.log(found);
			};
		};
		$("#hits").html("Search found "+found.length+" matches.");
		$("#found").data(found);
		console.log(found);
		pager(0);
	} else {
		console.log("it's empty");
		$('.hideOnSearch').show();
		for (i=0;i<=$('div.blogpost').length;i++){
			found.push(i);
		};
		$("#found").data(found);
		pager(0);
	};
}	

	
