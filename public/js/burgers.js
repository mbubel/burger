$(function () {
  $(".devour").on("click", function (event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PATCH",
    }).then(function () {
      location.reload();
    });
  });
});
