const submitSurvey = function(e){
    e.preventDefault();
    
    let formdata = $(this).serializeArray();

    $.ajax({
        url: "/api/employees",
        type: 'POST',
        data: formdata
    }).then(function(res){
        $('#match-name').text(res.name);
        $('#match-img').attr('src', res.photo);
        $('#results-modal').modal('show');
    });
};

$(document).ready(() => {
  $("form").on("submit", submitSurvey);
});