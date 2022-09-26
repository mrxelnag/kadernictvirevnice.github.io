/* Code for changing active 
link on clicking */
var btns =
  $("#navigation .nav-links .nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",
    function () {
      var current = document
        .getElementsByClassName("active");

      current[0].className = current[0]
        .className.replace(" active", "");

      this.className += " active";
    });
}

/* Code for changing active 
link on Scrolling */

$(window).scroll(function () {
  var distance = $(window).scrollTop();
  
  $('.page-section').each(function (i) {
    if ($(this).position().top <=
      distance + 200) {

      $('.nav-links a.active')
        .removeClass('active');

      $('.nav-links a').eq(i)
        .addClass('active');
      
    }
  });
}).scroll();


