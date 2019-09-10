$("#start").on("click", function () {
    game.start();
})

var questions = [
    {
        question: "What was the full legth CGI movie?",
        answers: ["A Bug's life", "Monster Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Toy Story",
    },
    {
        question: "Who is the Black Mamba?",
        answers: ["Kobe", "Lebron", "MJ", "Yao"],
        correctAnswer: "Kobe",
    },
    {
        question: "What does the coding bootcamp teaches us?",
        answers: ["coding", "bootcamp", "camping", "cheating"],
        correctAnswer: "coding",
    },
    {
        question: "Where is University of Michigan?",
        answers: ["US", "China", "UK", "Japan"],
        correctAnswer: "US",
    },
    {
        question: "Which team won the most Champs in NBA in the 90s?",
        answers: ["Bulls", "Lakers", "T-Wolves", "Magic"],
        correctAnswer: "Bulls",
    },
    {
        question: "What was Doug's best friend's name?",
        answers: ["Skeeter", "Mark", "Zach", "Cody"],
        correctAnswer: "Skeeter",
    }
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function () {
        timer=setInterval(game.countdown,1000)
        $("#subWrapper").prepend(`<h2> Time Remaining: <span id="counter">120</span> Seconds </h2>`);
        
            $("#start").remove();
            console.log("you clicked me!!!");
            for (let i = 0; i < questions.length; i++) {
                $("#subWrapper").append("<h2>" + questions[i].question + "</h2>");
                for (let j = 0; j < questions[i].answers.length; j++) {
                    $("#subWrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
                }
            }
        },
        done: function(){
            $.each($("input[name='question-0']:checked"), function(){
                if($(this).val()===questions[0].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-1']:checked"), function(){
                if($(this).val()===questions[1].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-2']:checked"), function(){
                if($(this).val()===questions[2].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-3']:checked"), function(){
                if($(this).val()===s[3].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-4']:checked"), function(){
                if($(this).val()===questions[4].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-5']:checked"), function(){
                if($(this).val()===questions[5].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            this.result();
        },

        result:function(){
            clearInterval(timer);
            $("#subWrapper h2").remove();
            $("#subWrapper").html("<h2>All Done!</h2>");
            $("#subWrapper").append('<h3> Incorrect answers: '+this.incorrect+"</h3>");
            $("#subWrapper").append('<h3> Incorrect answers: '+this.incorrect+"</h3>");
            $("#subWrapper").append('<h3> Unanswered: '+(questions.length-(this.correct+this.incorrect))+"(</h3)");
        }
    }