#!/usr/bin/env node
require('./register')
var path = require('path')

var filename = process.argv[2].substring(process.argv[2].length - 1, 1) === '💎'
  ? process.argv[2]
  : process.argv[2] + '.💎'

require(path.resolve(process.cwd(), filename))
