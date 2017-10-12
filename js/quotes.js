$(document).ready(function() {

function getQuote() {
  var quotes=[{
  quote: "“Legacy is greater than currency.”",
    name: "Gary Vaynerchuk"
  }, {
    quote: "“You're gonna die”",
    name: "Gary Vaynerchuk"
  }, {
    quote: "“Everything we do is for the purpose of altering consciousness.”",
    name: "Frank Yang"
  }, {
    quote: "“It takes a college degree to know that you don't need one.”",
    name: "Frank Yang"
  },  {
    quote: "“You're either a consumer or creator, you choose.”",
    name: "Tony Lin"
  }];

    var quote = $('#quoteContainer').text();
    var quoteName = $('#quoteName').text();
    var sourceLength = quotes.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    for (i = 0; i <= sourceLength; i += 1) {
      var newQuoteText = quotes[randomNumber].quote;
      var newQuoteName = quotes[randomNumber].name;
    }

    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteName">' + '-	' + newQuoteName + '</p>');
        quoteContainer.fadeIn(timeAnimation);
      }); //end of fadeOut
    } //end of getQuote
getQuote();

$('#quoteButton').click(getQuote);

}); //end of document.ready
