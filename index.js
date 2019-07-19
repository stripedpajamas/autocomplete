const fs = require('fs')
const diffy = require('diffy')({ fullscreen: true })
const input = require('diffy/input')({ style })
const Trie = require('./trie')

const wordsFile = fs.readFileSync('./words.txt', 'utf8')
const words = wordsFile.split('\n')

const trie = new Trie()
words.forEach((word) => trie.addWord(word))

function style (start, cursor, end) {
  return start + (cursor || '|') + end
}

let space = ' '.repeat(15)
let options = []
input.on('update', () => {
  let word = input.line().toLowerCase().replace(/[^a-z]/g, '')
  options = word ? trie.listSuffices(word).slice(0, 10) : []
  diffy.render()
})

diffy.render(() => {
  return `
    Enter word: ${input.line()}
    ---------------------------
    Options (top 10):
    \t${options[0] || space}
    \t${options[1] || space}
    \t${options[2] || space}
    \t${options[3] || space}
    \t${options[4] || space}
    \t${options[5] || space}
    \t${options[6] || space}
    \t${options[7] || space}
    \t${options[8] || space}
    \t${options[9] || space}
  `
})
