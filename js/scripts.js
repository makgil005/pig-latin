$(document).ready(function(){
  var vowels = ["a", "i", "o", "u", "e"];
  var speicial = "q";

  $("form").submit(function(event){
    event.preventDefault();
    var input = $("input").val().split(' ');
    console.log(input);
    for(var i = 0; i < input.length; i++){
      for(var j = 0; j < vowels.length; j++){
        if(input[i].charAt(0) === vowels[j]) {
          console.log(input[i] + 'way');
        }
      }
    }
  });
});