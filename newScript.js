$(document).ready(function() {
  $('.joke-button .button').click(function() {
    $('#get-jokes').load('.html');
  });
});
