var mogScript = require('../index.js')

describe('[ M.O.G compile / decompile functions ]', () => {
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

    describe('when the emojisMap is overriden', () => {
      it('should use the overrided map', () => {
        var source = '😎 😂 🕘 and few random emojis 😀 💚 🍾 🐴'
        var keywordsMap = {
          'break': '😎',
          'case': '🕘',
          'function': '😂'
        }
        var expected = 'break function case and few random emojis 😀 💚 🍾 🐴'

        var actual = mogScript.compile(source, keywordsMap)

        expect(actual).toBe(expected)
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

    describe('when the keywordsMap is overriden', () => {
      it('should use the overrided map', () => {
        var source = 'break function case and few random emojis 😀 💚 🍾 🐴'
        var keywordsMap = {
          'break': '😎',
          'case': '🕘',
          'function': '😂'
        }
        var expected = '😎 😂 🕘 and few random emojis 😀 💚 🍾 🐴'

        var actual = mogScript.decompile(source, keywordsMap)

        expect(actual).toBe(expected)
      })
    })
  })
})
