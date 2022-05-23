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
    let operation = null

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
            btn.addEventListener('click',()=>{
                if(currentOperand === "")return
                operation = btn.textContent
                operate()
                updateDisplay()
            })
        })

        acButton.addEventListener('click',()=>{
            currentOperand = 0
            previousOperand = ""
            operation = null
            updateDisplay()
        })
    }

    function operate() {
        if(currentOperand === "")return
        if(previousOperand !=={
           calculateResults()
        })

        previousOperand = `${currentOperand} ${operation}`
        currentOperand = ""
    }

    function updateDisplay() {
        currentText.textContent = currentOperand
        previousText.textContent = previousOperand
    }

    handleButtons()
}

calculator()




