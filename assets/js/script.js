$(document).ready(function() {

  // ADD TASK

  $('#task-form').submit(function () {
      if ($('.task-input').val() !== '') {
          var input_value = $('.task-input').val();
          $('.task-list').append('<li>' + input_value + '<a href="">x</a></li>');
          //$('ul').append('<li>' + input_value '<a href="">x</a></li>');

      };
      $('task-input').val('');
      return false;
  });

  // DELETE TASK

  $(document).on('click', 'a', function (e) {
      e.preventDefault();
      $(this).parent().remove();
  });



    // ADD LIST

    $('#sidebar').on('click', '.add-list', function () {
      if ($(".list-input").length==0) {
        $('.list-list').append('<input class="list-input" type="text" placeholder="Bucket List"> <a>REMOVE</a>');
      };
    });


    // DELETE LIST
    // $('.sidebar').on('click', '.remove-task', function () {
    //   $(this).parent('li').remove();
    //   });
    // });



});