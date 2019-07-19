const React = require('react')
const { Text } = require('ink')
const { default: TextInput } = require('ink-text-input')

class Autocomplete extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			options: [],
			word: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.process = this.process.bind(this)
	}

	handleChange (word) {
		this.setState({ word })
		this.process(word)
	}

	process (word) {
		if (!word) {
			this.setState({ options: [] })
		} else {
			this.setState({ options: this.props.trie.listSuffices(word) })
		}
	}

	render () {
		const options = this.state.options
			.slice(0, 10)
			.map((opt, i) => (<span key={i}>{opt}</span>))

		return (
			<span>
				<div>
					<Text>
						Enter word:
						{' '}
						<TextInput value={this.state.word} onChange={this.handleChange} />
					</Text>
				</div>
				
				<br />
				{options}
				<br />
			</span>
		)
	}
}

module.exports = Autocomplete
