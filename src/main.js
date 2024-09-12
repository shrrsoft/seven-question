let randomNumber;
function makeRandom () {
  randomNumber = Math.ceil(Math.random()*100);
  console.log(randomNumber);
}
makeRandom();
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let reStart = document.getElementById("reStart");
let remainChanse = document.getElementById("remainChanse");

let counter = 0;
let status = true;
if (status === true){
   btn.addEventListener("click", compare);
}

reStart.addEventListener("click",reset);

function reset(){
  status = true;
  counter = 0
  output.innerHTML = 'شروع کنید'
  output.style.backgroundColor ='#eab308';
  remainChanse.innerHTML = "شما 7 فرصت داری";
  makeRandom();
}

function compare() {
let userGuess = parseInt(document.getElementById("input").value);

  if (randomNumber === userGuess && status == true) {
    output.innerHTML = "آفرین";
    output.style.backgroundColor = "#06D6A0";
    status=false;
   } else if (randomNumber>userGuess && status==true) {
   output.innerHTML = "عدد مورد نظر، بزرگتر است";
   counter = counter+1;
   } else if (randomNumber<userGuess && userGuess<101 && status==true) {
   output.innerHTML = "عدد مورد نظر، کوچکتر است"
   counter = counter+1;
   } else if (userGuess>100) {
     output.innerHTML = "عدد انتخابی نباید بزرگتر از ۱۰۰ باشد"
   } else {
   output.innerHTML = "غیرقابل قبول";
  }
  document.getElementById("input").value = "";
  let remain=7-counter;
  remainChanse.innerHTML = "شما "+remain+" فرصت داری";
  if (counter > 6 ){
    output.innerHTML = "باختی";
    output.style.backgroundColor = "#EF476F";
    counter=7;
    status = false;

  } 
}