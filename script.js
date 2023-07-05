var screen=document.getElementById("screen");

var buttons=Array.from(document.getElementsByClassName("num"));
buttons.push(document.getElementById("delAll"));
buttons.push(document.getElementById("del"));
buttons.push(document.getElementById("percent"));
buttons.push(document.getElementById("divide"));
buttons.push(document.getElementById("add"));
buttons.push(document.getElementById("minus"));
buttons.push(document.getElementById("dot"));
buttons.push(document.getElementById("multiple"));
buttons.push(document.getElementById("equal"));
buttons.push(document.getElementById("paranthesis"));

buttons.forEach((button)=>{
   button.addEventListener("click",()=>{
    var buttontext=button.textContent;
    if(buttontext=="="){
     try {
        var result=eval(screen.textContent);
        screen.textContent=result;
     } catch (error) {
        screen.textContent="Error";
     }
    }
    else if(buttontext==="C"){
       screen.textContent="0"
    }
    else if(buttontext==="D"){
       screen.textContent=screen.textContent.slice(0,-1);
    }
    else if(buttontext==="%"){
        var result=eval(screen.textContent)/100;
        screen.textContent=result;
    }
    else{
        screen.textContent+=buttontext;
    }
   });
});


var test='this';
console.log(test.slice(0,-1));
