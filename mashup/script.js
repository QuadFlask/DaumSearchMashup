var API_URL = "http://apis.daum.net/search/vclip?apikey=f3330b2b08327bc2ed0806b5bc153de024c65e29&q={query}&result=5&pageno={pageno}&output=json&callback=?";

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
	var searchQuery = function(){
		console.log(1111);
		return false;
	};



	$('.search-form').on('submit', searchQuery);
});