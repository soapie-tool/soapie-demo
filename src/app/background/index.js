
import * as cocoSsd from '@tensorflow-models/coco-ssd'

class ImagePrediction {

  constructor() {
    this.images = {}
    this.loadModel()
    this.addImageListener()
  }

  async loadModel() { this.model = await cocoSsd.load() };

  async addImageListener() {
    chrome.webRequest.onCompleted.addListener(async req => {
      if (this.images[req.url] || !req || req.tabId < 0)
        return

      const image = await this.loadImage(req.url)
      const imageAltText = await this.getPrediction(image)
      this.images[req.url] = imageAltText

      console.log(imageAltText)
      if (imageAltText) {
        const payload = {
          imageUrl: req.url,
          imageAltText: `Soapie sees ${imageAltText}`
        }
        this.sendMessage(req.tabId, payload)
      }else{
        const payload = {
          imageUrl: req.url,
          imageAltText: `Soapie sees nothing.`
        }
        this.sendMessage(req.tabId, payload)
      }

    }, { urls: ["<all_urls>"], types: ["image", "object"] })
  }

  async loadImage(imageUrl) {
    return new Promise(resolve => {
      const image = document.createElement('img')
      image.crossOrigin = "anonymous"
      image.onload = () => {
        resolve(image)
      }
      image.src = imageUrl
    })
  }

  async getPrediction(image) {
    try {
      // if not ready, try after 2 sec
      if (!this.model) {
        setTimeout(() => { getPrediction(image) }, 2000)
        return;
      }

      const predictions = await this.model.detect(image);

      console.log('Soapie predictions:', predictions)
      return (!(predictions === undefined || predictions.length == 0))
        ? predictions.reduce((acc, val) => `${acc}, ${val.class}`, '').replace(/^,\ /, "")
        : ''
    } catch (e) {
      console.log('Soapie Error:', e)
      return ''
    }
  }

  sendMessage(tabId, payload) {
    chrome.tabs.sendMessage(tabId, {
      action: 'IMAGE_ANALYSE_DONE',
      payload: payload
    })
  }
}

const bgScript = new ImagePrediction()
