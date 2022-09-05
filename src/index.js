const Canvas = require('canvas')
const fs = require('fs')

const canva = Canvas.createCanvas(1024, 1024)
const ctx = canva.getContext('2d')


const unhas = './assets/unhas.png',
      unm = './assets/unm.png',
      // iain = '../assets/iain.png',
      // unpar = '../assets/unpar.png',
       stifa = './assets/stifa.png'
      // badut_indonesia = '../assets/badut.png'

const processUtil = async (path, image, x, y) => {
  
  // profile maba
  const maba = await Canvas.loadImage(path)
  ctx.drawImage(maba, x, y, canva.width, canva.height)

 // create a background 
  const bg = await Canvas.loadImage(image)
  ctx.drawImage(bg, 0, 0, canva.width, canva.height)
  return canva
}

class twibbonize {
  async unhas(photo) {
    const UNHAS = await processUtil(photo, unhas, 200, 0)
    return UNHAS.toBuffer()
  }
  async unm(photo) {
    const UNM = await processUtil(photo, unm, 200, 200)
    return UNM.toBuffer()
  }
  async stifa(photo) {
    const STIFA = await processUtil(photo, stifa, 0, 0)
    return STIFA.toBuffer()
  }
}
module.exports = twibbonize
