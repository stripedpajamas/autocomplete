"use strict";

const fs = require('fs');

const React = require('react');

const {
  render,
  Box
} = require('ink');

const Trie = require('./trie');

const Autocomplete = require('./ui');

const wordsFile = fs.readFileSync('./words.txt', 'utf8');
const words = wordsFile.split('\n');
const trie = new Trie();
words.forEach(word => trie.addWord(word));
render(React.createElement(Autocomplete, {
  trie: trie
}));