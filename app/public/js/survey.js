const submitSurvey = function(e){
    e.preventDefault();
    console.log($(this).serialize());

    /* $.ajax({
        url: "",

    }) */
};

$(document).ready(() => {
  $("form").on("submit", submitSurvey);
});