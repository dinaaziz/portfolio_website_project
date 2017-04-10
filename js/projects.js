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
		url:'https://api.github.com/users/dinaaziz/repos?sort=created',
		type:'GET',
		dataType:'json',
		success:function(data){
			showProjects(data)
		},
		// fail:showError
	})
}
function showProjects(json){
	var data = json.slice(0,5);
	var html = '';
	// html+= '<div class="row">';
	$.each(data,function(e,item){
		html+= '<div class="col-sm-12">'
		html+= '<a href="'+item.html_url+'" target="_blank">'+item.name+'</a>';
		// html+= '<span>&emsp;created at ' +item.created_at + '</span>'
		html+= '</div>'
	});
	// html+='</div>'
	$('.container .panel .panel-body').html(html);
}
function showError(error){
	$('.container .error').html(`${error}`);
}
/* favorite */
function onClickFavorite(){
	$('.container #favorite').click(function(event){
		loadPinnedRepos();
		event.preventDefault();
	});
}
function loadPinnedRepos(){
	$.ajax({
		url:'https://gh-pinned-repos.now.sh/?username=dinaaziz',
		type:'GET',
		dataType:'json',
		success:function(data){
			showPinnedRepos(data);
		}
	});
}
function showPinnedRepos(data){
	var html='';
	// html+= '<div class="row">';
	$.each(data,function(e,item){
		html+= '<div class="col-sm-12">'
		html+= '<a href="https://github.com/dinaazi/'+ item.repo +'" target="_blank">'+item.repo+'</a>';
		html+= '   written by:  ' +item.language +'  langauge'+'</span>'
		html+='</div>'
	});
	html+='</div>'
	$('.container .panel .panel-body').html(html);
}
