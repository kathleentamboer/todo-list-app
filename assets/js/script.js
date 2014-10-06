$(document).ready(function(event){

  // On submit of list new form
  $("#list-new").on("submit", function(event){
    event.preventDefault();

    var $form = $(this);
    var $input = $form.find("input");
    var listName = $input.val();

    // 1. Inject li into bottom of #lists
    var liHtml = "<li>" + listName + "<span>&times;</span></li>";
    $("#lists").append(liHtml);

    // 3. Clear out input
    // $input.val("");
    $form[0].reset();
    // event.currentTarget.reset();

  // On click on li in #lists
  $("#lists").on("click", "li", function(event){
    event.preventDefault();

    var $target = $(event.target);
    var $li = $(event.currentTarget);

    if($target.is("span")) {
      // If someone clicked the x span do this

      // 2. Remove li in #lists that was clicked on
      $li.remove();

    }
  });
  });
});