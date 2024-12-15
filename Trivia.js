//The elemetens
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//Time
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");

//Choices
const option_list = document.querySelector(".option_list");

//Music
const Music = document.getElementById('Music');

//Clicking Start Button
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo"); //Show the rules
}

//Clicking Exit Quiz Button
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); //Homescreen
}

// Clicking Continue Button
continue_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); //Hide the info
    quiz_box.classList.add("activeQuiz"); // Shows Quiz
    showQuestion(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
    Music.play();
}

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//Clicking Replay Quiz
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;

    timeValue = 15;
    widthValue = 0;
    userScore = 0;
    showQuestion(que_count);
    queCounter(que_numb);

    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left: ";
}

quit_quiz.onclick = () => {
    window.location.reload();
}


//Clicking Next Button
next_btn.onclick = () =>{
    if (que_count < questions.length - 1)
    {
        que_count++;
        que_numb++;
        showQuestion(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left: ";      
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Questions Completed");
        showResultBox();
    }

}

//Questions, Options, and Answers
function showQuestion(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">'  + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++ )
        {
        option[i].setAttribute("onclick", "optionSelected(this)"); 
        }     
}

//Appearing the icons
let tickicon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossicon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;

    if (userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");    
        console.log("Answer is Correct!");
        answer.insertAdjacentHTML("beforeend", tickicon );
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Wrong!"); 
        answer.insertAdjacentHTML("beforeend", crossicon );
        
        // if User chooses an incorrect answer then correct answer will be shown
        for (let i = 0; i < allOptions; i++ )
        {
            if(option_list.children[i].textContent == correctAns)
            {
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickicon );
            }
        }    
        }

// User one time answer
    for(let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}


function showResultBox(){
    info_box.classList.remove("activeInfo");  // Hides the rules  
    quiz_box.classList.remove("activeQuiz"); // Hides the quiz
    result_box.classList.add("activeResult"); //Shows the Result

    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 25){
        let scoreTag = '<span>Truly Filipino! You got <p>' + userScore + '</p> out of <p>'+ questions.length +'!</p> </span>';
        scoreText.innerHTML =scoreTag;
    }
    else if(userScore > 20){
        let scoreTag = '<span>Not bad! You got <p>'+ userScore + '</p> out of <p>'+ questions.length +'</p> </span>';
        scoreText.innerHTML =scoreTag;
    }

    else { 
        let scoreTag = '<span>Great Job. You got <p>'+ userScore + '</p> out of <p>'+ questions.length +'</p> </span>';
        scoreText.innerHTML =scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer,1000);

    function timer (){
        timeCount.textContent = time;
        time--;
        if(time < 9){
        let addZero = timeCount.textContent;
        timeCount.textContent = "0" + addZero;
        }
        if (time < 0)
        {
        clearInterval(counter);
        timeCount.textContent =  "00";
        timeOff.textContent = "Time Off: ";
        let correctAns = questions[que_count].answer;
        let allOptions = option_list.children.length;

        for (let i = 0; i < allOptions; i++ )
            {
                if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickicon );
                }
            } 
            
        for(let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";

        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549){
            clearInterval(counterLine);
        }
    }
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index + '</p> of <p>' + questions.length + '</p> Questions </span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}


