//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function () {
  console.log("Let’s get ready to party with jQuery!");
});

//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");

// remove last p of article
$(".article p:last").remove();

//Set the font size of the title to be a random pixel size from 0 to 100
let randomSize = Math.floor(Math.random() * 101);
$("#title").css("font-size", randomSize + "px");

// Add an item to the list; it can say whatever you want.
$("ol").append("<li>New List Item</li>");

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append("<p>apologizing for the list’s existence</p>");

//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on("change", function () {
  var updatedValues = [];
  $(".form-control").each(function () {
    updatedValues.push(parseInt($(this).val()));
  });
  console.log(
    `rgb(${updatedValues[0]},${updatedValues[1]},${updatedValues[2]})`
  );
  $("body").css(
    "background-color",
    `rgb(${updatedValues[0]},${updatedValues[1]},${updatedValues[2]})`
  );
});

//Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on("click", function () {
  $(this).remove();
});
