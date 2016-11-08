#!/usr/bin/env node
require('./register')
var path = require('path')

var filename = process.argv[2].match(/\.💎$/)
  ? process.argv[2]
  : process.argv[2] + '.💎'

require(path.resolve(process.cwd(), filename))
