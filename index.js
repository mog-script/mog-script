var keywordsMap = {
  'function': '⚙️',
  'import': '📦',
  'export': '🛳',
  'const': '💎',
  'from': '👈',
  'debugger': '🚧',
  'default': '⭐️',
  'delete': '⛔️',
  'return': '🎁',
  'new': '✨',
  'throw': '💥',
  'while': '👀',
  'switch': '🚥',
  'break': '⚡️',
  'case': '💼',
  'for': '🌀',
  'if': '❓',
  'catch': '🙉',
  'try': '🙊',
  'instanceof': '👶',
  'else': '⁉️',
  'true': '💖',
  'false': '💔'
}

var emojisMap = Object.keys(keywordsMap).reduce(function(obj, key) {
  obj[keywordsMap[key]] = key
  return obj
}, {})

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
