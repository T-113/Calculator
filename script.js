function calculator() {
    let previousText = document.querySelector('.previousNum')
    let currentText = document.querySelector('.currentNum')
    let numButtons = document.querySelectorAll('.num')
    let operationButtons = document.querySelectorAll('.operation')
    let deleteButton = document.querySelector('.delete')
    let acButton = document.querySelector('.ac')
    let equalsButton = document.querySelector('.equals')

    let currentOperand = ""
    let previousOperand = ""
    let operation = ""

    function handleButtons() {
        numButtons.forEach(btn => {
            btn.addEventListener('click',()=> {
                currentOperand === 0 ? currentOperand = "" : '';
                if(btn.textContent === "." && currentOperand.includes('.'))return
                currentOperand += btn.textContent.toString()
                updateDisplay()
            })
        })

        operationButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if(currentOperand === "")return
                operation = btn.textContent
                operate()
                updateDisplay()
            })
        })

        deleteButton.addEventListener('click',()=>{
            let temp
            if(currentOperand === "You can't devide by ZERO"){
                currentOperand = 0 
                temp = currentOperand
            }else{
                temp = currentOperand.toString().slice(0, -1)
            }

            if(temp === ''|| temp === 0){
                temp = 0
                currentOperand = temp
                updateDisplay()
            }
            else{
                currentOperand = parseFloat(temp)
                updateDisplay()
            }
        })

        acButton.addEventListener('click',()=>{
            currentOperand = 0
            previousOperand = ""
            operation = ""
            updateDisplay()
        })

        equalsButton.addEventListener('click',()=>{
            calculateResults()
            updateDisplay()
        })
    }

    function operate() {
        if(currentOperand === "")return
        if(previousOperand !== ""){
           calculateResults()
        }

        previousOperand = `${currentOperand} ${operation}`
        currentOperand = ""
        
    }

    function calculateResults(){
        let curr = parseFloat(currentOperand)
        let prev = parseFloat(previousOperand)
        let results;

        if(isNaN(prev) || isNaN(curr))return
        operation === "+" ? results = prev + curr 
        : operation === "-" ? results = prev - curr
        : operation === "×" ? results = prev * curr
        : operation === "÷" ? results = prev / curr
        : operation === "÷" && curr === 0 ? results = "You can't divide by ZERO"
        :'';

        currentOperand = results
        operation = "" 
        previousOperand = ""

    }

    function updateDisplay() {
        currentText.textContent = currentOperand
        previousText.textContent = previousOperand
    }

    handleButtons()
}

calculator()




