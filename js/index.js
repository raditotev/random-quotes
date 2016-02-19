function getQuote() {
  var apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"
  $.getJSON(apiUrl, function(json) {
    var author = json.quoteAuthor;
    if(author == ""){
      author = "Unknown";
    }
    var quote = json.quoteText;
    $("#quote").html(quote);
    $("#author").html(author);

    var twitterUrl = "https://twitter.com/intent/tweet?hashtags=quotes," + author + "&related=freecodecamp&text=" + encodeURIComponent(quote) + " - " + encodeURIComponent(author);
    var twitterLink = "<a href='" + twitterUrl + "' target='_blank'>" + '<i class="fa fa-twitter fa-2x"></i>' + "</a>";
    $("#twitter").html(twitterLink);
  });
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", function() {
    getQuote();
  });
});