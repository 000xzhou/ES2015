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
$("form").on("submit", function (e) {
  e.preventDefault();

  let title = $("#title").val();
  let rating = $("#rating").val();
  if (isFinite(rating) && rating.length > 0) {
    if (title.length < 2 || rating > 10 || rating < 0) {
      $("#title").val("");
      $("#rating").val("");
      errorMessage("Please check your input");
      return;
    }
    createOutputDiv(title, rating);
  } else {
    $("#title").val("");
    $("#rating").val("");
    errorMessage("please enter a number between 0-10");
    return;
  }
});

const createOutputDiv = (title, rating) => {
  let newDiv = $("<div></div>");

  newDiv.append(`<div>${title}</div>`);
  newDiv.append(`<div>${rating}/10</div>`);
  newDiv.append(`<button class="delete">Delete</button>`);

  $(".output").append(newDiv);
};

const errorMessage = (msg) => {
  let errorDiv = $(`<div>${msg}</div>`);
};

$(".output").on("click", ".delete", function () {
  $(this)
    .parent()
    .fadeOut(function () {
      $(this).remove();
    });
});
