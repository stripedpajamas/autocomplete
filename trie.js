function Trie () {
  this.root = { children: [] }
}

Trie.prototype.addWord = function (word) {
  let current = this.root
  for (let c of word) {
    let i = c.charCodeAt(0) - 97
    try {
      if (!current.children[i]) {
        current.children[i] = { children: [] }
      }
    } catch (e) {
      console.log({ word, i, current })
    }
    current = current.children[i]
  }
  current.val = word
}

Trie.prototype.listSuffices = function (prefix) {
  let suffices = []
  let current = this.root
  for (let c of prefix) {
    let i = c.charCodeAt(0) - 97
    if (!current.children[i]) return suffices
    current = current.children[i]
  }

  return collect(current, suffices)
}

function collect (node, output) {
  if (node.val) output.push(node.val)
  node.children.filter(Boolean).forEach(child => collect(child, output))
  return output
}

module.exports = Trie
