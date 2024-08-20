
const col="black";

function changeColour()
{
    let intro= document.getElementById("intro");
    let box_colour= document.getElementById("box");
    let button= document.getElementById("click_button");

    if(box_colour.style.backgroundColor===col)
    {
        box_colour.style.backgroundColor="white";
        box_colour.style.color="black";
        intro.textContent= "INTRODUCTION";
        button.textContent= "REVEAL";
        button.style.color="black";
    }
    else 
    {
        box_colour.style.backgroundColor="black";
        box_colour.style.color="white";
        intro.textContent= "MRITYUNJAY KUMAR";
        button.textContent= "HIDE";
        button.style.color="white";
    }  
}

