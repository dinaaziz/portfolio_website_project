$(document).ready(function(){
  ajaxGitRequest()
})

function ajaxGitRequest(){
  $.get("skills.json", function(data){
  console.log(data)
  varbhtml='';
  $.each(data.skills, function(item, correspond){
    html+='<div class="list">'+
    '<a href="#" class="item"'+
    '<h4 class="name">'+correspond.name+'</h4>'+
    '<h3 class="description">'+correspond.description+'</h3>'+
    '</a>'+
    '</div>';
  });
  $('#skills').html(html);
);
}
}
