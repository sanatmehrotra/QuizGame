const question = [{
    'que': 'Which of the following is a markup language?',
     'a': 'HTML',
     'b': 'CSS',
     'c': 'JavaScript',
     'd': 'PHP',
     'correct': 'a'
},
{
    'que': 'What year was JavaScript launched?',
     'a': '1996',
     'b': '1995',
     'c': '1994',
     'd': 'none of the above',
     'correct': 'b'
},
{
    'que': 'What does CSS stand for?',
     'a': 'Hypertext Markup language',
     'b': 'Cascading Style Sheet',
     'c': 'Jason Object Notation',
     'd': 'Helecoptor Motorboats Lamborgini',
     'correct': 'b'
}
]
 
let index = 0;  
let right = 0, wrong = 0;
let total = question.length;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.Option')
function loadQuestion() {
    if(index === total) {
        return endQuiz();
    }
     reset();
    const data = question[index];
    console.log(data);
    quesBox.innerText =  `${index+1}) ${data.que}`; /* ``*/
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

function sumbitQuiz() {
      const data = question[index];
  const ans = getAns();
  if(ans === data.correct) {
    right++;
  } else {
    wrong++
  }
  index++;
  loadQuestion();
  return;
}

function getAns() {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
            answer = input.value; 
            }
        }
    )
    return answer;
}
function reset() {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
})
}

function endQuiz() {
    document.getElementById("box").innerHTML = ` <div style="text-align: center">
                                                <h3>Thank you for playing the Quiz</h3>
                                                <h2> ${right} / ${total} are correct </h2>
                                                </div>   `
}
    

loadQuestion();