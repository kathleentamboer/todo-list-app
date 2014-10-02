$(document).ready(function() {

  // ADD TASK

  $('#task-form').submit(function () {
      if ($('.task-input').val() !== '') {
          var input_value = $('.task-input').val();
          $('.task-list').append('<li>' + input_value + '<a href class="task-remove">x</a></li>');
          //$('ul').append('<li>' + input_value '<a href="">x</a></li>');

      };
      $('.task-input').val('');
      return false;
  });

  // DELETE TASK

  $(document).on('click', '.task-remove', function (e) {
      e.preventDefault();
      $(this).parent().remove();
  });



    // ADD LIST

    $('#sidebar').ready(function () {
      $('.list').hide();
    });

    $('#sidebar').on('click', '.add-list', function () {
      $('.list').show();
    });


    $('#sidebar').submit(function () {
        if ($('.task-input').val() !== '') {
            var input_value = $('.task-input').val();
            $('.list-list').append('<li>' + input_value + '</li>');
        };
        $('.task-input').val('');
        return false;

    });


    // DELETE LIST
    // $('.sidebar').on('click', '.remove-task', function () {
    //   $(this).parent('li').remove();
    //   });
    // });



});