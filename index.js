var keywordsMap = {
  'break': '⚡️',
  'case': '💼',
  'catch': '🙉',
  'const': '💎',
  'debugger': '🚧',
  'default': '⭐️',
  'delete': '⛔️',
  'else': '❗️',
  'export': '🛳',
  'false': '💔',
  'for': '🌀',
  'from': '👈',
  'function': '⚙️',
  'if': '❓',
  'import': '📦',
  'instanceof': '👶',
  'new': '✨',
  'return': '🎁',
  'switch': '🚦',
  'throw': '💥',
  'true': '💗',
  'try': '🙊',
  'while': '👀'
}

var emojisMap = swapObjeckKeysAndValues(keywordsMap)

module.exports.keywordsMap = keywordsMap
module.exports.emojisMap = emojisMap

module.exports.decompile = function (text) {
  return processText(keywordsMap, text, '\\b|')
}

module.exports.compile = function (text) {
  return processText(emojisMap, text, '|')
}

function processText (source, text, regexSeparator) {
  const sourceRegexp = Object.keys(source).join(regexSeparator)
  return text.replace(new RegExp(sourceRegexp, 'g'), function (match) {
    return source[match]
  })
}

function swapObjeckKeysAndValues (obj) {
  return Object.keys(obj).reduce(function(resultObj, key) {
    resultObj[obj[key]] = key
    return resultObj
  }, {})
}
