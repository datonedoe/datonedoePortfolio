// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  var selector = '.navbar-nav li';

  $(selector).on('click', function(){
      $(selector).removeClass('active');
      $(this).addClass('active');
  });

$(".read-more").on("mouseover", function(){
  console.log("current html:", $(this).html());
});
$(".read-more").on("click", function(){
    // $(this).trigger("click");
  // console.log("has collapsed?",$(this).hasClass("collapsed"));
   if($(this).text()=='Read More'){
     $(this).text('Read Less')
   } else {
     $(this).text('Read More')
   }


  // if($(this).html()==='Read More'){
  //   $(this).html(`<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>`);
  //   console.log($(this).html());
  // } else {
  //   $(this).trigger("click");
  //
  //   $(this).html('Read More');
  //   console.log($(this).html());
  // }


});
