function getblog(){
	
}



function getblog(){

}

function getposts(){
    $.getJSON('entries.json', function(data) {
		$.each(data.posts, function(key, val) {
                       // stuff
        }
    }
}

$(document).ready(getposts);