/**
 * ## **Part Two - Movies App!**

Build an application that uses jQuery to do the following:

- Contains a form with two inputs for a title and rating along with a button to submit the form.
- When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
- When the button to remove is clicked, remove each title and rating from the DOM.

## **Further Study**

- Ensure that the rating of a movie can only be between 0 and 10.
- Ensure that a title has at least 2 characters in it.
- Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

 */

// on submit create
$("form").on("submit", function (e) {
  e.preventDefault();
  $(".errorMsg").empty();
  let title = $("#title").val();
  let rating = $("#rating").val();
  // if it's num and has a num
  if (isFinite(rating) && rating.length > 0) {
    // if title is lower than 2 or rating is higher than 10 or rating is lower than 0
    if (title.length < 2 || rating > 10 || rating < 0) {
      $("#title").val("");
      $("#rating").val("");
      errorMessage("Please check your input");
      return;
    }
    //output
    createOutputDiv(title, rating);
  } else {
    $("#title").val("");
    $("#rating").val("");
    errorMessage("Please enter a number between 0-10");
    return;
  }
});
// creates an list item under ul output
const createOutputDiv = (title, rating) => {
  let newDiv = $("<div class='outputBox'></div>");

  newDiv.append(
    `<li><span class="title">${title}</span> - <span class="rating">${rating}</span></li>`
  );
  newDiv.append(`<button class="delete">Delete</button>`);

  $(".output").append(newDiv);
};
// gives error
const errorMessage = (msg) => {
  let errorDiv = $(`<div>${msg}</div>`);
  $(".errorMsg").append(errorDiv);
};

// deletes div on click
$(".output").on("click", ".delete", function () {
  $(this)
    .parent()
    .fadeOut(function () {
      $(this).remove();
    });
});

// Flags to keep track of the current sort order
var ascendingTitle = true;
var ascendingRating = true;

// Sort by Title
$("#sortTitle").on("click", function () {
  var items = $("#output > div").get();
  items.sort(function (a, b) {
    var keyA = $(a).find(".title").text().toUpperCase();
    var keyB = $(b).find(".title").text().toUpperCase();
    if (ascendingTitle) {
      return keyA.localeCompare(keyB);
    } else {
      return keyB.localeCompare(keyA);
    }
  });
  $.each(items, function (i, div) {
    $("#output").append(div);
  });
  if ($(this).children("span").hasClass("down")) {
    $(this).children("span").removeClass("down").addClass("up");
  } else {
    $(this).children("span").removeClass("up").addClass("down");
  }
  ascendingTitle = !ascendingTitle; // Toggle the sort order for the next click
});

// Sort by Rating
$("#sortRating").on("click", function () {
  var items = $("#output > div").get();
  items.sort(function (a, b) {
    var keyA = parseInt($(a).find(".rating").text(), 10);
    var keyB = parseInt($(b).find(".rating").text(), 10);
    if (ascendingRating) {
      return keyA - keyB;
    } else {
      return keyB - keyA;
    }
  });
  $.each(items, function (i, div) {
    $("#output").append(div);
  });
  if ($(this).children("span").hasClass("down")) {
    $(this).children("span").removeClass("down").addClass("up");
  } else {
    $(this).children("span").removeClass("up").addClass("down");
  }
  ascendingRating = !ascendingRating; // Toggle the sort order for the next click
});
