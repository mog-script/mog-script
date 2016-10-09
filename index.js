var keywordsMap = {
  'break': '⚡️',
  'case': '💼',
  'catch': '🙉',
  'class': '💩',
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

module.exports.decompile = function (text, map) {
  var currentMap = map || keywordsMap

  return processText(currentMap, text, '\\b|')
}

module.exports.compile = function (text, map) {
  if (map) {
    emojisMap = swapObjeckKeysAndValues(map)
  }

  return processText(emojisMap, text, '|')
}

function processText (sourceMap, text, regexSeparator) {
  const sourceRegexp = Object.keys(sourceMap).join(regexSeparator)

  return text.replace(new RegExp(sourceRegexp, 'g'), function (match) {
    return sourceMap[match]
  })
}

function swapObjeckKeysAndValues (obj) {
  return Object.keys(obj).reduce(function(resultObj, key) {
    resultObj[obj[key]] = key
    return resultObj
  }, {})
}
