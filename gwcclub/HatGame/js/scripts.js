var data = [{
    question:"What is pwd",
    answer: "Gives your current path"
},{ question:"What is cd",
    answer: "A calling directory"
  }];
var num = Math.round(Math.random()*(data.length-1));
function searchItem(){
  num = Math.round(Math.random()*(data.length-1));
  document.getElementById("results").innerHTML = data[num].question;
  }
function getAnswer(){
  document.getElementById("results").innerHTML = data[num].answer;
}
