SC.initialize({
  client_id: '8f0191d4cf2796967998df63792b7411'
});


$(document).ready(function() {

SC.get('/tracks', {
	q: 'buskers', license: 'cc-by-sa'
	}).then(function(tracks) {
	console.log(tracks);
});

$('#search-term').submit(function(event){
	event.preventDefault();
	var searchTerm = $('#query').val();
	var track_url = 'http://soundcloud.com/' + searchTerm;

	SC.oEmbed(track_url, { 
		auto_play: false,
		element: document.getElementById('player')
	})
})

})
