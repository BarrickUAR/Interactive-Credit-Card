let cardCvv = document.querySelector("#cardCvv");
let cardNumber = document.querySelector("#cardNumber");
let names = document.querySelector("#name");
let date = document.querySelector("#date");
let date2 = document.querySelector("#date2");
let holderInput = document.querySelector("#holderInput");
let numberInput = document.querySelector("#numberInput");
let aa = document.querySelector("#aa");
let yy = document.querySelector("#yy");
let cvInput = document.querySelector("#cvInput");
let btn = document.querySelector(".btn");
let checkContainer = document.querySelector(".checkContainer");
let card = document.querySelector(".card");
let cardDetail = document.querySelector(".cardDetail");
let form = document.querySelector('#form');
let contiune = document.querySelector('.contiune');
let container = document.querySelector('.container');


checkContainer.style.display = "none";

cvInput.oninput = () => {
  if (cvInput.value.length > cvInput.maxLength) {
    cvInput.value = cvInput.value.slice(0, cvInput.maxLength);
  }
  cardCvv.innerText = cvInput.value;
};

numberInput.oninput = () => {
  if (numberInput.value.length > numberInput.maxLength) {
    numberInput.value = numberInput.value.slice(0, numberInput.maxLength);
  }
  cardNumber.innerText = numberInput.value;
};

holderInput.oninput = () => {
  names.innerText = holderInput.value;
};

aa.oninput = () => {
  if (aa.value.length > aa.maxLength) {
    aa.value = aa.value.slice(0, aa.maxLength);
  }
  date.innerText = aa.value;

  if (parseInt(aa.value) > 12) {
    aa.value = "12";
  date.innerText = aa.value;
  }

};

yy.oninput = () => {
  if (yy.value.length > yy.maxLength) {
    yy.value = aa.value.slice(0, yy.maxLength);
  }
  date2.innerText = "/" + yy.value;
};


function handleForm(e) {
  e.preventDefault();
  cardDetail.style.display = "none";
  checkContainer.style.display = "block";
  form.reset();
}

form.addEventListener("submit", handleForm);

function handleContiune() {
  cardCvv.innerText = '264'; 
  cardNumber.innerText = '0000 0000 0000 0000'
  names.innerText = 'Berk Uçar'
  date.innerText =  '07'
  date2.innerText = "/29" 
  cardDetail.style.display = "block";
  checkContainer.style.display = "none";
}

contiune.addEventListener('click', handleContiune);

