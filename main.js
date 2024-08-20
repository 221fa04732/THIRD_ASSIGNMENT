
const col="black";

function changeColour()
{
    let box_colour= document.getElementById("intro");
    let box_colour= document.getElementById("box");
    if(box_colour.style.backgroundColor===col)
    {
        box_colour.style.backgroundColor="white";
        box_colour.style.color="black";
        intro.textContent= "This is my simple introduction";
    }
    else 
    {
        box_colour.style.backgroundColor="black";
        box_colour.style.color="white";
        intro.textContent= "My name is MRITYUNJAY KUMAR";
    }
    
}

