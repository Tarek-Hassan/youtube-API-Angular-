var mychannel='LearnWebCode';
$("document").ready(function () {
	$.get("https://www.googleapis.com/youtube/v3/channels",{
														part:'contentDetails',
														forUsername:mychannel,
														key:"AIzaSyCCRnMbE4iibzWvniBZfNpHcZeTowl2wVg"},
		function (data) {$.each(data.items,function (i,item) {
			pid=item.contentDetails.relatedPlaylists.uploads;
			getVideoPlayList(pid);
		})}
	);
	function getVideoPlayList(pid) {
		$.get("https://www.googleapis.com/youtube/v3/playlistItems",{
																part:'snippet',
																maxResults:5,
																playlistId:pid,
																key:"AIzaSyCCRnMbE4iibzWvniBZfNpHcZeTowl2wVg"},
		function (data) {$.each(data.items,function (i,item) {
			var output;
			videoTitle=item.snippet.title;
			videoId=item.snippet.resourceId.videoId;
			output='<li><iframe src="//www.youtube.com/embed/'+ videoId +'"></iframe></li>'
			$("#result").append(output);

		})}
	);
	}
});