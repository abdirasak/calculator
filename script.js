//defining ui
const numButtons = document.querySelectorAll('.number');
const operButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const delButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const prevOpText = document.getElementById('prev-op');
const currOpText = document.getElementById('curr-op');

// defining the calculator class
class Calculator{
  constructor(prevOpTextElement, currOpTextElement){
    this.operation = null;
    this.currentOp = '';
    this.prevOp = '';
    this.currOpTextElement = currOpTextElement;
    this.prevOpTextElement = prevOpTextElement;
  }

  clear(){
    this.currentOp = '';
    this.prevOp = '';
  }

  del(){
    this.currentOp = this.currentOp.slice(0, -1)

  }

  appendNum(number){
    if(number === '.' && this.currentOp.includes('.')) return
    this.currentOp += number;

  }

  chooseOperator(operation){
    if(this.currentOp === '') return;
    this.operation = operation;
    this.prevOp = this.currentOp + this.operation;
    this.currentOp = '';
  }

  updateDisplay(){
    this.currOpTextElement.innerText = this.currentOp;
    this.prevOpTextElement.innerText = this.prevOp;

  }

  compute(){
    let result;
    const prev = parseFloat(this.prevOp);
    const current = parseFloat(this.currentOp);

    switch(this.operation){
      case '+':
        result = prev + current;
        break

      case '-':
        result = prev - current;
        break

      case '*':
        result = prev * current;
        break
      
      case '÷':
        result = prev / current;
        break

      default:
        return;

    }

    this.currentOp = result;
    this.operation = null;
    this.prevOp = '';


  }



}

//create new object from the class
const calculator = new Calculator(prevOpText, currOpText)


//show the number clicked 0n the screen
numButtons.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.appendNum(button.innerText)
    calculator.updateDisplay()
  })
})

//operation functionility 
operButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerText)
    calculator.updateDisplay()
  })
})


//clear the text on the screen
clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

//delete functionality 
delButton.addEventListener('click', () => {
  calculator.del();
  calculator.updateDisplay();
})

//do the calculation
equalButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay();

})



