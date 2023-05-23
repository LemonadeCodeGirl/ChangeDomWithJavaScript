document.getElementById("heading1").innerHTML = "Hi there";

let s = 1;
function colorChange(){
    document.querySelector("#color").innerHTML = "This is not a pretty button. :(";
    document.querySelector("#color").style = "color: red; background: green";

    document.title = "Changed the Colors!";

    //Testing things

    // document.querySelector(".disable").innerHTML = "true";
}

function disable(){
    //Figure out how to disable a button
    document.querySelector(".disable").innerHTML = "clicked!";
    document.querySelector(".disable").disabled = true;
    s += 1;
    
}

function hideButton(){
    // document.querySelector("#color").hidden = true;

    // document.getElementById("hide").hidden = true;
    
    document.querySelector("#hide").hidden = true;
}
