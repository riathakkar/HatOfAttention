var data = [{
    question:"3 +3",
    answer: "33"
},{ question:"a = 1; b=2; c= a*b; output of print(c)?",
    answer: "2"
  },{ question:"x = 9 \n x = '10' \n print(x). Output?",
    answer: "10"
  },{ question:"What is the type of '7'?",
    answer: "string"
  },{ question:"What is true",
    answer: "a boolean expression"
  }];
var num = Math.round(Math.random()*(data.length-1));
function searchItem(){
  num = Math.round(Math.random()*(data.length-1));
  document.getElementById("results").innerHTML = data[num].question;
  }
function getAnswer(){
  document.getElementById("results").innerHTML = data[num].answer;
}
