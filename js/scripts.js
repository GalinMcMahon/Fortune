$(function() {

  $("form#fortune-form").submit(function(event){
    event.preventDefault();
    let fortuneTotal=0;
    $("input:checkbox[name=fortuneBox]:checked").each(function(){
      fortuneTotal += parseInt($(this).val());
    });
    if (fortuneTotal <= 6) {
      $("#good").show();
    } else if (fortuneTotal > 6 && fortuneTotal <= 10) {
      $("#ok").show();
    } else {
      $("#bad").show();
    };
    $("#fortuneResponse").show();
  });
});
