$(document).ready(function() {
  $('nav a').smoothScroll();

  var $details = $('#project-details');

  $('.card').on('click',function() {
    // Get the name of the clicked project card
    var name = $(this).data('name');

    // Target the corresponding project detail element
    var detailEl = $details.find('div[data-name=' + name + ']')[0];

    // Display the targetted element, and hide all the others, OR
    // Just hide the already displayed targetted element
    if ($(detailEl).is(':hidden')) {  
      $details.children().hide();
    }

    $(detailEl).slideToggle();
  })
})
