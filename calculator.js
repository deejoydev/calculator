let buttons = ["AC", "%", "÷", "7", "8", "9", 
  "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

let symbolButtons = ["+", "-", "×", "÷", "="];

let upperButtons = ["AC", "%" ];


let A = 0;
let operator = null;
let B = null;

function clearAll() {
    A = null;
    operator = null;
    B = null;
}


for(let i = 0; i < buttons.length; i++){
 let allButtons = buttons[i];
 let buttonElem = document.createElement("button");
 buttonElem.innerText = allButtons;


 document.querySelector('.btn').appendChild(buttonElem);

 let displayValue = document.querySelector(".display");

 if (allButtons === "0") {
    buttonElem.style.width = '200px'
    buttonElem.style.gridColumn = "span 2"
 }

 if(allButtons === "AC") {
    buttonElem.style.width = '200px'
    buttonElem.style.gridColumn = "span 2"
 }

 if (upperButtons.includes(allButtons))
  {
  buttonElem.style.backgroundColor = "#d1e5f4"
 } else if(symbolButtons.includes(allButtons)){
  buttonElem.style.backgroundColor = "#d1e5f4"
 } 

 buttonElem.addEventListener("click", function(){
  if (upperButtons.includes(allButtons)) {
    if (allButtons === "AC") {
      clearAll();
      displayValue.value = "";
  }
   else if (allButtons === "%") {
      displayValue.value = Number(displayValue.value) / 100;
  }
   }else if (symbolButtons.includes(allButtons)) {
    
    if (allButtons === "=") {
      if (A != null) {
          B = displayValue.value;
          let numA = Number(A);
          let numB = Number(B);

          if (operator === "÷") {
              displayValue.value = numA/numB;
          }
          else if (operator === "×") {
              displayValue.value = numA*numB;
          }
          else if (operator === "-") {
              displayValue.value = numA-numB;
          }
          else if (operator === "+") {
              displayValue.value = numA+numB;
          }
          clearAll();
      }
    } else {
      operator = allButtons; 
      A = displayValue.value;
      displayValue.value = "";
  }

   }else{
    if (allButtons === ".") {
      if (displayValue.value != "" && !displayValue.value.includes(allButtons)) {
        displayValue.value += allButtons;
    }
    }else if(displayValue.value === "0") {
      displayValue.value = allButtons
    }else{
      displayValue.value += allButtons
    }
  
   }
 })
}




