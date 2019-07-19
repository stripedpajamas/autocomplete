const fs = require('fs')
const Trie = require('./trie')

const wordsFile = fs.readFileSync('./words.txt', 'utf8')
const words = wordsFile.split('\n')

const trie = new Trie()
words.forEach((word) => trie.addWord(word))

console.log(trie.listSuffices('hap'))
