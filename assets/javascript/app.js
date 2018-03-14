// create array of animal topics
var topics = ["cats", "puppies", "aardvark", "flying squirrel", "dolphin", "fox", "water buffallo", "bear", "hedgehog", "duck", "bird", "horse", "cow"];

// variable for button
var button;
// new topic added to the input field 
var newTopic = "";

// create function to generate new buttons from the topics array
var buttonGenerator = function (){
	// empties the previous div elements
	 $("#buttonArea").empty();
	// loops through the array and creates buttons
	for(l = 0; l < topics.length; l++) {
		button = $("<button type=" + "button" + ">" + topics[l] + "</button>").addClass("btn btn-sm btn-success").attr("data",topics[l]);
		$("#buttonArea").append(button);
	};
}


