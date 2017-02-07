var quizIndex = 0;
var correct = 0;
var counter = 0;

var quizArray = [
    {
        id: 0,
        question: ' Q1- If we add all the 7 colours of rainbow (red, yellow, blue, green, orange, violet and indigo), the resultant colour would be?',
        opt1: 'White',
        opt2: 'Black',
        opt3: 'Dark Blue',
        correctAnswer: 'White'
        
    },
    {
        id: 1,
        question: 'Q2- Short-sight defect could be corrected by a __________.',
        opt1: 'convex lens',
        opt2: 'concave lens',
        opt3: 'converging lens',
        correctAnswer: 'concave lens'
        
    },
    {
        id: 2,
        question: 'Q3- Ozone layer protects the Earth from __________ radiations from the Sun.',
        opt1: 'infrared',
        opt2: 'X-rays',
        opt3: 'Ultraviolet',
        correctAnswer: 'Ultraviolet'
        
    },
    {
        id: 3,
        question: 'Q4- There are __________ planets in orbit around the Sun.',
        opt1: '6',
        opt2: '8',
        opt3: '9',
        correctAnswer: '8'
        
    },
    {
        id: 4,
        question: 'Q5- Which from the following is NOT a Renewable Energy?',
        opt1: 'Geothermal',
        opt2: 'Solar',
        opt3: 'Nuclear',
        correctAnswer: 'Nuclear'
        
    },
    {
        id: 5,
        question: 'Q6- When vapours of a substance are cooled and changes into liquid, it is called',
        opt1: 'conduction',
        opt2: 'condensation',
        opt3: 'evaporation',
        correctAnswer: 'condensation'
        
    },
    {
        id: 6,
        question: 'Q7- An instrument used to measure gas pressure is called',
        opt1: 'ammeter',
        opt2: 'barometer',
        opt3: 'manometer',
        correctAnswer: 'manometer'
        
    },
    {
        id: 7,
        question: 'Q8- If we add salt to the pure water, its boiling point will',
        opt1: 'Increase',
        opt2: 'decrease',
        opt3: 'remain same',
        correctAnswer: 'Increase'
        
    },
        {
        id: 8,
        question: 'Q9- The boiling point of alcohol is',
        opt1: '71 °C',
        opt2: '75 °C',
        opt3: '79 °C',
        correctAnswer: '79 °C'
        
    },
        {
        id: 9,
        question: 'Q10- The presence of impurities __________ the freezing point of water.',
        opt1: 'increases',
        opt2: 'decreases',
        opt3: 'accelerate',
        correctAnswer: 'decreases'
        
        }];
    
    window.onload = function(){
        document.querySelector('score').setAttribute('style', 'visibility:hidden');
        document.getElementById('quizStarted').setAttribute('style', 'visibility:hidden');
    }
    
    function startQuiz(){
        var b = document.getElementById("nextButton");
        b.setAttribute('disabled', 'disabled');
        b.setAttribute('style', 'cursor:not-allowed');
        b.style.opacity = "0.4";
        
        document.getElementById('startButton').setAttribute('style', 'display:none');
        document.getElementById('quizStarted').setAttribute('style', 'visibility:visible');
        document.getElementById('questions').innerHTML = quizArray[0].question;
        document.getElementById('option1').innerHTML = quizArray[0].opt1;
        document.getElementById('opt1').value = quizArray[0].opt1;
        document.getElementById('option2').innerHTML = quizArray[0].opt2;
        document.getElementById('opt2').value = quizArray[0].opt2;
        document.getElementById('option3').innerHTML = quizArray[0].opt3;
        document.getElementById('opt3').value = quizArray[0].opt3;
        
//  timer
        
        min = 2;
        sec = 59;
        document.getElementById("second").innerHTML = 00;
        document.getElementById("minute").innerHTML = min+1;


        function timeSecond (){
        if (min > 0) {
            document.getElementById("minute").innerHTML = min;
        }
        if (min >= 0 && sec> 0) {
            document.getElementById("second").innerHTML = sec--;
        }
        
        
        else if (min >= 0 && sec == 0){
            document.getElementById("second").innerHTML = 00;
            document.getElementById("minute").innerHTML = min;
            sec = 59;
            min--;
            if (min >= 0) {
            document.getElementById("minute").innerHTML = min;
            }
        }
        if (min == 0 && sec == 0) {
            document.getElementById("timeUp").innerHTML = "Time is Up!";
            mainResult();
         }
        
      }
       setInterval(timeSecond , 1000);
      
 }
    
    
    
    function enableNextButton(){
        var radioName = document.querySelector('input[name="radio"]:checked');
        if (radioName) {
            var b = document.getElementById('nextButton');
            b.removeAttribute('disabled', 'disabled');
            b.removeAttribute('style', 'cursor:not-allowed');
            b.style.opacity = "1";
        }
        
    }
    
    
   function next(){

        quizIndex = quizIndex+1;
        var correctAnswer = quizArray[quizIndex-1].correctAnswer;
        var radioName = document.querySelector('input[name="radio"]:checked').value;
        if (radioName == correctAnswer) {
            correct = correct+1;
            
        }
        else{
            correct;
        }
        
        if (quizArray[quizIndex] !== undefined) {
        var b = document.getElementById("nextButton");
        b.setAttribute('disabled', 'disabled');
        b.setAttribute('style', 'cursor:not-allowed');
        b.style.opacity = "0.4";
        
        document.getElementById('questions').innerHTML = quizArray[quizIndex].question;
        document.getElementById('option1').innerHTML = quizArray[quizIndex].opt1;
        document.getElementById('opt1').value = quizArray[quizIndex].opt1;
        document.getElementById('opt1').checked = false;
        document.getElementById('option2').innerHTML = quizArray[quizIndex].opt2;
        document.getElementById('opt2').value = quizArray[quizIndex].opt2;
        document.getElementById('opt2').checked = false;
        document.getElementById('option3').innerHTML = quizArray[quizIndex].opt3;
        document.getElementById('opt3').value = quizArray[quizIndex].opt3;  
        document.getElementById('opt3').checked = false;          
        }
        else{
            document.getElementById("minute").setAttribute('style', 'display:none');
            document.getElementById("second").setAttribute('style', 'display:none');
            document.getElementById("timeUp").setAttribute('style', 'display:none');
            mainResult();
        }
      }

      function mainResult() {
            var result = (correct/quizArray.length)*100;
            var score = document.getElementById('score').innerHTML = Math.round(result);
            document.getElementById('quizStarted').setAttribute('style', 'display:none');
            document.querySelector('score').setAttribute('style', 'visibility:visible');
            document.getElementById('score').setAttribute('style', 'visibility:visible');
      }



    
    
    
