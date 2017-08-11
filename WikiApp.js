//come up with a function to access the search box
function searchBox(){
	//create the api url code
	var urlBase = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
	var searchRequest = document.querySelector('#search').value;
	var url = urlBase + searchRequest + '&format=json&callback=wikiCallbackFunction';

	//need to pull up the json data when user presses enter on the search form
	$.ajax({
	type: 'GET',
	url: url,
	async: false,
	dataType: 'jsonp',
	//try adding the click function here??
	success: function(wikiResponse){
		//heading is wikiResponse[1][0]
		//description is wikiResponse[2][0]
		//link is wikiResponse[3][0] 
		document.querySelector('#JSON-info').innerHTML = (' ');
		//checks to make sure the search term is in database
		if (wikiResponse[3].length === 0){
			alert('That topic cannot be found. Try searching another topic.');
			document.querySelector('#search').value = '';
			} else {
				//loops through the JSON and assigns each value to each other
				for (var i = 0; i < wikiResponse[1].length; i++){
					$('#JSON-info').fadeOut(0);
					$('#JSON-info').prepend("<a target='_blank' href=" + wikiResponse[3][i] + ">" + "<li>" + wikiResponse[1][i] + "<p>" + wikiResponse[2][i] + "</p></li></a>");						
				}
			} 
		$('#JSON-info').fadeIn(1000);
		}
	});
}
