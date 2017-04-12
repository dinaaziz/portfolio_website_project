var channelName = 'alxs1aa';
var vidWidth=500;
var vidHeight=400;
var vidResults=10;

// https://www.googleapis.com/youtube/v3/channels?part=contentDetails&key=AIzaSyBdoyirpMDZ4o3s0Ib4RP-CYQhElXMEpvM&forUsername=alxs1aa

$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: 'contentDetails',
      forUsername: channelName,
      key: 'AIzaSyBdoyirpMDZ4o3s0Ib4RP-CYQhElXMEpvM'},
      function(data){
        console.dir(data);
       $.each(data.items,function(i,item){
         console.log(item);
         pid= item.contentDetails.relatedPlaylists.uploads;
         getVids(pid);
       })
      }
    );

    function getVids(pid){
    $.get(
      " https://www.googleapis.com/youtube/v3/playlistItems",{
        part: 'snippet',
        maxResults: vidResults,
        playlistId: pid,
        key: 'AIzaSyBu7T8r9bITDNnoTUfsyzwV-hMBe4TRwak'},
        function(data){
          console.log("second function")
          var output;
         $.each(data.items,function(i,item){
           console.log(item);
          videoTitle=item.snippet.title;
          output= `<li><iframe height='${vidHeight}' width='${vidWidth}' src='https://www.youtube.com/embed/${item.snippet.resourceId.videoId}'></iframe></li>`;
          $('#results').append(output);
         })
       })
}
  });
