$(document).ready(function(){
	projectsloader();
	onClickRecent();
	onClickFavorite()
});

function onClickRecent(){
	$('.container #recent').click(function(event){
		projectsloader();
		event.preventDefault();
	});
}

function projectsloader(){
	$.ajax({
		url:'https://api.github.com/users/dinaaziz/repos?sort=updated&per_page=5',
		type:'GET',
		dataType:'json',
		success:function(data){
			showProjects(data)
		},
	})
}
function showProjects(json){
	var data = json.slice(0,5);
	var html = '';
	html+= '<div class="recent">';
	$.each(data,function(e,item){
		html+= '<div class="col-sm-12">'
		html+= '<a href="'+item.html_url+'" target="_blank">'+item.name+'</a>';
		// html+= '<span>&emsp;created at ' +item.created_at + '</span>'
		html+= '</div>'
	});
	// html+='</div>'
	$('.container .star .star-body').html(html);
}
function showError(error){
	$('.container .error').html(`${error}`);
}
/* favorite */
function onClickFavorite(){
	$('.container #favorite').click(function(event){
		loadStarredRepos();
		event.preventDefault();
	});
}
function loadStarredRepos(){
	$.ajax({
		url:'https://api.github.com/users/dinaaziz/repos?sort=starred',
		type:'GET',
		dataType:'json',
		success:function(data){
			showStarredRepos(data);
		}
	});
}
function showStarredRepos(data){
	var html='';
	// html+= '<div class="row">';
	$.each(data,function(e,item){
		html+= '<div class="col-sm-12">'
		html+= '<a href="'+item.html_url+'" target="_blank">'+item.name+'</a>';
		html+= ' written by:  ' +item.language +'  langauge'+'</span>'
		html+='</div>'
	});
	html+='</div>'
	$('.container .star .star-body').html(html);
}
