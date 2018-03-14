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


// take the value from the input area and add to the topics array. create function that takes each topic and remakes the buttons.


// $(".submit").on("click", function(event){
// 	event.preventDefault();

// 	console.log("submit");
// 	// sets inputted value to newTopic 
// 	newTopic = $("#topic-input").val();

// 	// call the function that creates the new button
// 	buttonGenerator();
// });


// The user clicks on a generated button, generating 10 static, non-animated gif images from the GIPHY API and places them on the page. 
$("#buttonArea").on("click", ".btn", function(){
    var thing = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=QlVL8gqdM45p1iPWYoqgyX9uAXe1An3A";


// AJAX call to GIPHY...
    $.ajax({
        url: queryURL,
        method: "GET" 

    }).done(function(response){
        console.log(response);
        
        var results = response.data;

        for (var l = 0; l < results.length; l++) {
            // a div is created to hold a gif of any topic
            var topicDiv = $("<div>");
           
            // Display rating underneath GIF
           var p = $("<p>");
           p.text(results[l].rating);
           var p = $("<p>").text("Rating: " + results[l].rating);

           //create variable for topicImage
           var topicImage = $("<img>").addClass("greenBorder");

           // create animated and still states 
           topicImage.attr("src", results[l].images.fixed_height_still.url);
           topicImage.attr("data-still", results[l].images.fixed_height_still.url);
           topicImage.attr("data-animate", results[l].images.fixed_height.url)
           topicImage.attr("data-state", "still")
           topicImage.addClass("gif");
           
           // image is appended to the div
           topicDiv.append(topicImage);
           // rating is appended to the div below the gif
           topicDiv.append(p); 			
           // new images will be placed at the beginning (top) of the containing gif area
           $("#gifArea").prepend(topicDiv);
       }
    })
})


// When the user clicks one of the still GIPHY images, and it animates. When the user clicks the gif again, it stops playing.
$("#gifArea").on("click", ".gif", function(event){
event.preventDefault();

// gets the current state of the clicked gif 
var state = $(this).attr("data-state");

// depending on current state gifs alternate between animated and paused
// animate
if (state === "still") {
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
// pause
} else {
$(this).attr("src", $(this).attr("data-still"));
$(this).attr("data-state", "still");
}

})


// event listener to take, on submission, value from input box, add it to the array. The "buttonGenerator" function is called to take each topic in the array recreate all buttons on page.


$(".submit").on("click", function(event){
event.preventDefault();

console.log("submit");
// set input value to newTopic 
newTopic = $("#topic-input").val();
// new topic added to array 
topics.push(newTopic);
console.log(topics);
// function creating new button...
buttonGenerator();
});



buttonGenerator();
