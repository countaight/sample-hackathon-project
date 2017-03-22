import React, { Component } from 'react';

export default class Title extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: "Oscar"
		}
	}

	render () {
		return (
			<div>
				<h1>Hello {this.state.name}</h1>
			</div>
		)
	}
}