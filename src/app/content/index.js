
//updateAltText()

chrome.runtime.onMessage.addListener((message) => {
  if (!message || !message.payload || !message.action) 
    return

  if (message.action === 'IMAGE_ANALYSE_DONE') {
    console.log('Soapie Predict: ', message.payload.imageAltText)
    const imageDom = document.querySelector(`img[src="${message.payload.imageUrl}"]`)
    imageDom.alt = message.payload.imageAltText
  }
});