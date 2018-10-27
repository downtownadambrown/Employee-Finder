const submitSurvey = function(){
    const surveyAnswers = [];
    console.log('lel');
    for (let i = 1; i <= 10; i++){
        const questionValue = $(`#q${i}`).val();
        surveyAnswers.push(questionValue);
    }

    console.log(surveyAnswers);
    /* $.ajax({
        url: "",

    }) */
};

$('#submit').on('click', submitSurvey);