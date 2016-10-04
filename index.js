var keywordsMap = {
  'function': '⚙️',
  'import': '📦',
  'export': '🎁',
  'const': '💎',
  'from': '👈'
}

var emojisMap = Object.keys(keywordsMap).reduce(function(obj, key) {
  obj[keywordsMap[key]] = key
  return obj
}, {})

module.exports.compile = function (text) {
  return processText(keywordsMap, text, '\\b|')
}

module.exports.decompile = function (text) {
  return processText(emojisMap, text, '|')
}

function processText (source, text, regexSeparator) {
  const sourceRegexp = Object.keys(source).join(regexSeparator)
  return text.replace(new RegExp(sourceRegexp, 'g'), function (match) {
    return source[match]
  })
}
