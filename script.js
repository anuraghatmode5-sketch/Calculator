let display = document.querySelector(".show");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value = button.textContent;

          if(value==="AC"){
             expression = ""
             display.textContent = expression;
          }
          else if(value==="="){
             expression = eval(expression).toString();
             display.textContent = expression;
          }
          else if(value==="←"){
             expression = expression.slice(0,-1);
             display.textContent = expression;
          }
          else{
              expression += value;
              display.textContent = expression;
            }
    })
})