$(document).ready(function(){
  $("#backendForm").submit(function(event) {
    var backendType = $("input:radio[name=backendType]:checked").val();
    $("#answerArea").show();
    if (backendType === "PHP") {
      $("#answer").text("PHP/Drupal");
      $("#ruby, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
      $("#PHP").show();
    } else if (backendType === "ruby") {
      $("#answer").text("Ruby/Rails");
      $("#PHP, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
      $("#ruby").show();

    } else if (backendType === "java") {
      $("#answer").text("Java/Android");
      $("#ruby, #PHP, #Csharp, #undecidedAnswer, #answerArea2").hide();
      $("#java").show();

    } else if (backendType === "Csharp") {
      $("#answer").text("C#/.NET");
      $("#ruby, #java, #PHP, #undecidedAnswer, #answerArea2").hide();
      $("#Csharp").show();

    } else if (backendType === "PHP") {
      $("#answer").text("PHP/Drupal");
      $("#ruby, #java, #Csharp, #undecidedAnswer, #answerArea2").hide();
      $("#PHP").show();

    } else if (backendType === "undecided") {
      $("#answerArea2, #undecidedAnswer").show();
      $("#ruby, #java, #Csharp, #PHP, #answerArea").hide();
    }
    event.preventDefault();
  });
});
