chrome.runtime.onMessage.addListener(msg => {
    console.log('received from bg');
});

function sendAction() {
    console.log('function called');
    chrome.runtime.sendMessage({content: "Function call: "});
}


//exportFunction(sendAction, window, {defineAs:'sendAction'});

sendAction();


change_alt();

function change_alt(){
    let elements = document.querySelectorAll("img");
    let missingAltImgSrc = [];
    for (let x = 0; x < elements.length; x++) {
        console.log(elements[x].alt);
        if (elements[x].alt.replace(/\W+/g,"") == ""){
            missingAltImgSrc.push(elements[x].src);
            elements[x].alt = "Missing alt";
            console.log(elements[x].src);
        }else{
        }
    }
};
