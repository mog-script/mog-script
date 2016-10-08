var mogScript = require('../index.js')

describe('.compile()', function() {
  describe('when the emoji is in the supported list', () => {
    it('should map each emoji symbol with the appropriate javascript keyword', function() {
      var source = Object.keys(mogScript.emojisMap).join(' ')
      var expected = Object.keys(mogScript.keywordsMap).join(' ')

      var actual = mogScript.compile(source)

      expect(actual).toBe(expected)
    })
  })
  describe('when the emoji is not in the supported list', () => {
    it('should not modify the input', function() {
      var source = 'test string and few random emojis 😀 😎 🍾 🐴'

      var actual = mogScript.compile(source)

      expect(actual).toBe(source)
    })
  })
})

describe('.decompile()', function() {
  describe('when the keyword is in the supported list', () => {
    it('should map each keyword to the appropriate emoji symbol', function() {
      var source = Object.keys(mogScript.keywordsMap).join(' ')
      var expected = Object.keys(mogScript.emojisMap).join(' ')

      var actual = mogScript.decompile(source)

      expect(actual).toBe(expected)
    })
  })
  describe('when the keyword is not in the supported list', () => {
    it('should not modify the input', function() {
      var source = 'abstract, void, typeof emojis 😀 😎 🍾 🐴'

      var actual = mogScript.decompile(source)

      expect(actual).toBe(source)
    })
  })
})
