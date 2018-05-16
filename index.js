#!user/bin/env node

const path = require('path')
const fs = require('fs')


const argv = process.argv

const vueFile = path.resolve(__dirname, argv[1])

const src = fs.createReadStream('./tempalte.vue')
const dist = fs.createWriteStream(vueFile)

src.pipe(dist)