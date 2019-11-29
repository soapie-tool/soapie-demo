import * as cocoSsd from '@tensorflow-models/coco-ssd';

/**
 *
 * void
 */
const updateAltText = async () => {
  const model = await cocoSsd.load();
  const images = document.getElementsByTagName('img');

  for (var i = 0, l = images.length; i < l; i++) {
    if (images[i].alt.replace(/\W+/g,"") == ""){
      const predictions = await getPrediction(images[i], model);

      if (predictions){
        images[i].alt = `Soapie sees ${predictions}.`;
      }else{
        images[i].alt = `Soapie sees nothing.`;
      }
    }
  }
}

/**
 * param Node image
 * param cocoSsd model
 *
 * return String
 */
const getPrediction = async (image, model) => {
  try {
    const predictions = await model.detect(image);

    console.log('Soapie predictions:', predictions)

    return (!(predictions === undefined || predictions.length == 0))
      ? predictions.reduce((acc, val) => `${acc}, ${val.class}`, '').replace(/^,\ /, "",)
      : ''
  } catch(e) {
    console.log('Soapie Error:', e)
    return ''
  }
}

export default  updateAltText
