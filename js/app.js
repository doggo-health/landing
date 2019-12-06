$(document).ready(function(){

  // Sweet Alerts
  $('footer a').click(function() {
    swal({
      title: 'Hello!',
      text: 'Thanks for checking out my page!',
      type: 'success',
      confirmButtonText: 'Profile'
    });
  });

});
