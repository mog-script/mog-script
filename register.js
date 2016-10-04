var fs = require('fs')
var mog = require('./')

require.extensions['.💎'] = function (module, filename) {
  return module._compile(
    mog.compile(fs.readFileSync(filename).toString()),
    filename
  )
}
