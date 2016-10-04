var keywordsToEmojis = {
  'function': '⚙️',
  'import': '📦',
  'export': '🎁',
  'const': '💎',
  'from': '👈'
}

var emojisToKeywords = Object.keys(keywordsToEmojis).reduce(function(obj, key) {
  obj[keywordsToEmojis[key]] = key
  return obj
}, {})

module.exports = {
  keywordsToEmojis: keywordsToEmojis,
  emojisToKeywords: emojisToKeywords
}
