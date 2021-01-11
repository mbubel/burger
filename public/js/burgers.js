$(function () {
  // Devour button on click event
  $(".devour").on("click", function (event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PATCH",
    }).then(function () {
      location.reload();
    });
  });

  // Submit button on click event for a new burger
  $("#submit-button").on("click", function (event) {
    event.preventDefault();
    let postData = {
      name: $("#new-burger").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: postData,
    }).then(function () {
      location.reload();
    });
  });
});
