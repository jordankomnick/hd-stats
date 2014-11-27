$(document).ready(function() {
  $('#check_all_training').click(function(){
    $("input[name=training_check]").attr('checked', true);
  });
  $('#check_all_position').click(function(){
    $("input[name=position_check]").attr('checked', true);
  });
  $('#check_all_shift').click(function(){
    $("input[name=shift_check]").attr('checked', true);
  });
});