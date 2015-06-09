function getposts(){
	$.getJSON('entries.json', function(data){
		$.each(data.entries, function(key, val) { 
			$("#blog").append("<div class='container well' id='"+key+"'><div  class='col-sm-8 blogpost'><small><p class='muted' style='float:right;'>"+data.entries[key].date+"</p></small><h5>"+data.entries[key].title+"</h5><p>"+data.entries[key].text+"</p></div></div>");
		
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

function pickPix(){
	var Comics = [
	"http://static.comicvine.com/uploads/scale_large/10/108980/2260155-saga__1__2012_.jpg",
	"http://static.comicvine.com/uploads/scale_large/0/9116/2199272-01.jpg",
	"http://static.comicvine.com/uploads/scale_large/6/67663/2971157-09.jpg",
	"http://static.comicvine.com/uploads/scale_large/6/67663/4261575-01-2nd-print.jpg"
	];
	var comic = Comics[Math.floor(Math.random() * Comics.length)];
	$("#comic").attr("src",comic);
	
	var Movies = [
	"http://www.impawards.com/2010/mr_nobody_ver6_xlg.html",
	"http://meetinthelobby.com/wp-content/uploads/2010/11/InceptionAlternateMoviePoster.jpg",
	"http://2.bp.blogspot.com/-30rlkP7MuwU/UTZlGNjEDTI/AAAAAAAAAHg/M_qho92V4s8/s1600/brazil.jpg",
	"http://www.fanboy.com/wp-content/uploads/2010/10/Star-Wars-alternative-movie-poster.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/1c/58/8d/1c588df1f4c7991f3e00a8dcca1a20eb.jpg",
	"http://assets.flicks.co.nz/images/movies/poster/dc/dc2208f9bbd11486d5dbbb9218e03017_500x735.jpg"
		];
	var movie = Movies[Math.floor(Math.random() * Movies.length)];
	$("#movie").attr("src",movie);
	
	var Kids = [
	"https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-15/11189864_1576703815938441_1482264260_n.jpg",
	"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/10729333_303385989864418_883564312_n.jpg",
	"https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/10400247_1030765726175_1927_n.jpg?oh=2f4dc15de4cd3ff40d9af249f3e748fe&oe=5603ECBC",
	"https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/1935534_1094587961691_3245752_n.jpg?oh=65dd8f2fb318370bb7147b3df567f8a1&oe=55C28A35"
	];
	var kid = Kids[Math.floor(Math.random() * Kids.length)];
	$("#kid").attr("src",kid);
}

function pager(change){
	console.log("running pager");
	var page = Number($("#pg").html());
	page+=change;
	$("#pg").html(page);
	var count = found.length;
 	for (c=0;c<=$('div.blogpost').length;c++){
		$("#"+c+"").hide();
		console.log ("hiding "+c);
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
	$("#search2").hide();
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

	
