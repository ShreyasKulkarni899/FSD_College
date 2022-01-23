let queue = [];

var queuetextValue = document.querySelector("#QueueData"),
    DataEnQueue  = document.querySelector("#EnQueueBtn"),
    DataDeQueue   = document.querySelector("#DeQueueBtn");
    

    DataEnQueue.addEventListener("click", function() {
        if (queuetextValue.value == ""){
            document.getElementById("QueueOutput").innerHTML = "Enter Data & Perform Operation..!!";
            document.getElementById("QueueOutput").style.border = "red";
        }
        else{
            queue.push(queuetextValue.value);
            document.getElementById("QueueOutput").innerHTML = queue;
            document.getElementById('QueueData').value='';
        }    
    });

    DataDeQueue.addEventListener("click", function() {
        if (queue.length == 0){
            document.getElementById("QueueOutput").innerHTML = "queue is Empty..!!";
        }
        else{
            queue.shift();
            document.getElementById("QueueOutput").innerHTML = queue;
        }
    });


