//come up with a function to access the search box
var submit = document.querySelector('#submit-me');

function searchBox(){
	//create the api url code
	var urlBase = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
	var searchRequest = document.querySelector('#search').value;
	console.log(searchRequest);
	var url = urlBase + searchRequest + '&format=json&callback=wikiCallbackFunction';
	console.log(url);

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
		for (var i = 0; i < wikiResponse[1].length; i++){
			$('#JSON-info').prepend("<a target='_blank' href=" + wikiResponse[3][i] + ">" + "<li>" + wikiResponse[1][i] + "<p>" + wikiResponse[2][i] + "</p></li></a>");
		}
	}
});
}
