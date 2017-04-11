var channelName = 'TheNewBaghdad';
var vidWidth=500;
var vidHeight=400;
var vidResults=10;
$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: 'contentDetails',
      forUsername: channelName,
      key: 'AIzaSyBu7T8r9bITDNnoTUfsyzwV-hMBe4TRwak'},
      function(data){
       $.each(data.items,function(i,item){
         console.log(item);
         pid= item.contentDetails.relatedPlaylists.uploads;
         getVids(pid);
       })
      }
    );

    function getVids(pid){
    $.get(
      "https://www.googleapis.com/youtube/v3/channels",{
        part: 'snippet',
        maxResults: vidResults,
        playlistId: pid,
        key: 'AIzaSyBu7T8r9bITDNnoTUfsyzwV-hMBe4TRwak'},
        function(data){
          var output;
         $.each(data.items,function(i,item){
           console.log(item);
          videoTitle=item.snippet.title;
          output= '<li><iframe height='+vidHeight+'  width='+vidWidth+' src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
          $('#results').append(output);
         })
       })
}
  });
