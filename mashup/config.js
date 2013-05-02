var API_KEY = "d9a62e25204d376220a7b500bb4b21112a55ac0a";
var API_URL = "<%=searchTypeUrl%>?apikey=<%=apikey%>&q=<%=query%>&result=5&pageno=<%=pageno%>&output=json&callback=?";
var SEARCH_TYPE = ["블로그", "카페", "게시판"];
var SEARCH_API_URL = [
"http://apis.daum.net/search/blog",
"http://apis.daum.net/search/cafe",
"http://apis.daum.net/search/blog"
];
var IS_DEBUG = true;
