change_alt();
function change_alt(){
    console.log("Function called")
    let elements = document.querySelectorAll("img");
    for (let x = 0; x < elements.length; x++) {
        console.log(elements[x].alt);
        elements[x].alt = "New alt";
    }
};
