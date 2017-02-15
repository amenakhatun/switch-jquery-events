$(function() {

  $('.switch').on('click', function(){

    console.log("clicked");

        if ( $('.switch button').hasClass('on') ){
          $('.switch button').removeClass('on').addClass('off');
          $('body').removeClass('light').addClass('dark');
          $('.status').text("Hey, who turned out the lights?");
        }
        else {
          $('.switch button').removeClass('off').addClass('on');
          $('body').removeClass('dark').addClass('light');
          $('.status').text("It's so bright in here!");

        }

        // $('.light').removeClass('light');
  });

});


// $('.status').text("It's so bright in here!");
//         $('.status').text("Hey, who turned off the lights?");

      //
      //

// <div class="switch"
// <button type="button" class="on"></button>
//  </div>

// if statements look like this:
// if (condition_a) {
//
// }
// else {
//
// }

//
// possible emotions: happy, angry, sad
//
// if (happy) {
//
// }
// else {
//
// }
//
//
// if happy
//   something
// elsif angry
//   something else
// else
//   other case
// end

    //
    // if ( $('.switch button').attr('class') === 'on' ) {
    //   $('.switch button').removeClass('on').addClass('off');
    // }
    //
    // else {
    //   $('.switch button').removeClass('off').addClass('on');
    //
    // }
    //
    //
    // $('.light').removeClass('light');
    //







//When someone hits the button in the switch,
// remove the current state class (on/off), and
//apply the opposite class (on/off)



//Swap the colors of the body's
//background and text by adding
//or removing the dark/light class

//
// $("button").click(function(){
//     $("p").removeClass("intro");
// });
//

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
