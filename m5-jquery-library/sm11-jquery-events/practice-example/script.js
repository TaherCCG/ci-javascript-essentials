$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
          $(".stream1").fadeTo(1000, 0.5);
          // $(".stream1").fadeToggle('1000');
       
   });
   $("#stream2_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
     $("p").click(function() {
            $("p").css("color", "red");
     });
     $("h2").hover(function() {
        $("h2").css("background-color", "lightblue");
     });
     $("h2").mouseleave(function() {
        $("h2").css("background-color", "white");
     });
     $("h2").hover(function() {
            $(this).css("font-size", "2em");
       }, function() {
            $(this).css("font-size", "1.5em");
       });

     $("h2").click(function() {
        $("h2").css("background-color", "lightblue");
     });
     $("h2").dblclick(function() {
        $("h2").css("background-color", "lightgreen");
     });

}); 