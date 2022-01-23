let stack = [];

var textValue = document.querySelector("#data"),
    DataPush  = document.querySelector("#buttonPush"),
    DataPop   = document.querySelector("#buttonPop");
    

    DataPush.addEventListener("click", function() {
        if (textValue.value == ""){
            document.getElementById("output").innerHTML = "Enter Data & Perform Operation..!!";
        }
        else{
            stack.push(textValue.value);
            document.getElementById("output").innerHTML = stack;
            document.getElementById('data').value='';
        }    
    });

    DataPop.addEventListener("click", function() {
        if (stack.length == 0){
            document.getElementById("output").innerHTML = "Stack is Empty..!!";
        }
        else{
            stack.pop();
            document.getElementById("output").innerHTML = stack;
        }
    });


