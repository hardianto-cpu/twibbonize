const twibbonize = require('./index.js')

const fs = require('fs')

new twibbonize().stifa('./assets/netral.png').then(a => fs.writeFileSync('./assets/stifa-ouput.png', a))
