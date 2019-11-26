alert('bg running');
console.log('bg running');

/*
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    alert('message received');
}

chrome.runtime.onMessage.addListener(msg => {
    alert('received from content');
    chrome.tabs.sendMessage('message from bg');
});

function sendAction(action) {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: action});
    });
}
*/

// Notice there is no 'import' statement. 'cocoSsd' and 'tf' is
// available on the index-page because of the script tag above.

const img = document.getElementById('img');

// Load the model.
cocoSsd.load().then(model => {
// detect objects in the image.
model.detect(img).then(predictions => {
  console.log('Predictions: ', predictions);
});
});
