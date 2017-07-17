
var wisdom = ["You can do anything, but not everything.", "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "The richest man is not he who has the most, but he who needs the least.", "You miss 100 percent of the shots you never take.", "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", 
"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", "A house divided against itself cannot stand.", "We should emphasize not Negro history, but the Negro in history. What we need is not a history of selected races or nations, but the history of the world void of national bias, race hate, and religious prejudice."];

var author = ["—David Allen", "—Antoine de Saint-Exupéry", "—Unknown Author", "—Wayne Gretzky", "—Ambrose Redmoon", "-Martin Luther King Jr.", "-Martin Luther King Jr.", "-Abraham Lincoln", "- Carter Woodson"];


function getWisdom(array, subarray){


var randomWisdom = Math.floor(Math.random()*array.length);
//var randomAuthor = Math.floor(Math.random()*wisdom.length);
var quote = array[randomWisdom];
var person = subarray[randomWisdom];
$('.quote').text('"'+quote+'"');
$('.author').text(person);


}

function getQuote() {        
  window.open("https://twitter.com/home/?status=" + quote + person);
}


$(document).ready(function (){

getWisdom(wisdom, author);


$('.generatebutton').on('click', function (){


	getWisdom(wisdom, author);


    });


$('#tweetquote').on('click', function(){


getQuote();

   });

});




