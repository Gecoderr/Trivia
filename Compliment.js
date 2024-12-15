// Good and Bad Compliments
const goodCompliments = [
    {
        text: "Magnificent",
        image: "https://i.pinimg.com/564x/5f/a0/04/5fa004c77dcc99f43701294e27dd7a64.jpg"
    },

    {
        text:"HOWWWW???",
        image: "https://i.imgflip.com/6woq7y.jpg?a481656"
    },

    {
        text:"Great Job",
        image: "https://i.imgflip.com/1hx5mc.jpg?a481632"
    },

    {
        text:"How...",
        image: "https://i.imgflip.com/2/91y1em.jpg"
    },
    
    {
        text:"Noice",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZP9N8ADTzcd3GLPXWQ7jmz8rMYUO3Df61Q&s"
    },

    {
        text:"NAYSUUUUU",
        image: "https://media.makeameme.org/created/yesssssss-correct-answer.jpg"
    },

    {
        text:"Amazing!",
        image: "https://i.imgflip.com/2/6e11nd.jpg"
    },

    {
        text:"NOICE BRAINN",
        image: "https://i.imgflip.com/56143h.jpg?a481704"
    },
    //
    {
        text:"YOU GOT THAT BRAINNCELLSS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpsK0IJgYJXtK1xQUGISI9RrqKJmQ5XI3j7TgTEKeb03kOJsPsU66fA_9y7_TjvvHfPY&usqp=CAU"
    },

    {
        text:"UNLOCKED MEMORYYY",
        image: "https://us-tuna-sounds-images.voicemod.net/6e51eaf0-b3e3-4969-b1ea-cac8c98b3544-1666472596440.jpg"
    },

];

const badCompliments = 
[

    {
        text:"that's fineee",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrk0oVxgW3phA1P0AymD9DyPDz3nkYARq5iD064nM_RxdEUnP9E1fFE5X_dlm7ByDEqXs&usqp=CAU"
    },

    {
        text:"that's fineee",
        image: "https://i.imgflip.com/2e8l7c.jpg?a481200"
    },

    {
        text:"HOLD ONNN",
        image: "https://i.imgflip.com/2/7kx9z9.jpg"
    },

    {
        text:"better luck next timeee...",
        image: "https://ih1.redbubble.net/image.5214948802.2443/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
    },

    {
        text:"Don't give up",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cncSp_QGOeGYBWG4ZIvKr_2KhM60lzbBqb-3A-tLLEZ42TIado3p9Lq_MGRq1h6jXNY&usqp=CAU"
    },

    {
        text:"Wrong hehe",
        image: "https://media.makeameme.org/created/sorry-your-answer-28f38027d9.jpg"
    },
    //
    {
        text:"GOTCHAAAAA",
        image: "https://a.pinatafarm.com/330x336/d94184b681/crying-guy.jpg"
    },

    {
        text:"Try againnn???",
        image: "https://i.ytimg.com/vi/3d3KyV767RU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgPyhFMA8=&rs=AOn4CLCduqPyYBHdpLGVDdp5hY7sqSB0Eg"
    },

    {
        text:"Really?",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/cover4_new_1200x768.jpeg?size=690:388"
    },

    {
        text: "T_T",
        image: "https://content.imageresizer.com/images/memes/Crying-Emoji-meme-8.jpg"
    },   
    
];

//Appearing Complliments
function showCompliment(isCorrect) 
{

    const complimentsArray = isCorrect ? goodCompliments : badCompliments;
    const randomIndex = Math.floor(Math.random() * complimentsArray.length);
    const compliment = complimentsArray[randomIndex];
    const complimentContainer = document.createElement('div');
    complimentContainer.classList.add('compliment-container');
    complimentContainer.innerHTML = `
        <p style="font-size: 20px; font-weight: bold; text-align: center;">${compliment.text}</p>
        <img src="${compliment.image}" alt="Compliment Image" style="display: block; margin: 10px auto;" />`;
    document.body.appendChild(complimentContainer);

    // Delay 
    setTimeout(() => {
        complimentContainer.remove();
    }, 2000); // Delay Time
}

// Trigger compliments after an answer
function optionSelected(answer) 
{
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;

    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is Correct!");
        answer.insertAdjacentHTML("beforeend", tickicon);

        // Show a good compliment
        showCompliment(true);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong!");
        answer.insertAdjacentHTML("beforeend", crossicon);

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
            }
        }
        // Show a bad compliment
        showCompliment(false);
    }

    // Disable all options after selection
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}