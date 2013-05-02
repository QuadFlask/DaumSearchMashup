

function rhtmlspecialchars(str) {
	if (typeof(str) == "string") {
		str = str.replace(/&gt;/ig, ">");
		str = str.replace(/&lt;/ig, "<");
		str = str.replace(/&#039;/g, "'");
		str = str.replace(/&quot;/ig, '"');
		str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
	}
	return str;
}
var pageno = 1;


$(document).ready(function() {
	
	var searchTypeIndex = 0;

	var callbackData = function(data){
		console.log(data);
	};

	var searchQuery = function(){

		var query = $('#query').val();

		var url = _.template(API_URL, {
			searchTypeUrl :SEARCH_API_URL[searchTypeIndex],
			apikey : API_KEY,
			query : query,
			pageno : 1
		});

		_log(url);

		var data = {list:[
			{title:"", link:""},
			{title:"", link:""},
			{title:"", link:""},
			{title:"", link:""},
			{title:"", link:""},
		]};

		$('.list .box').html(_.tamplate($('#listTamplate').html(), data));

		$.getJSON(url, callbackData);

		return false;
	};



	$('.search-form').on('submit', searchQuery);
});