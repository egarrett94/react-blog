import React, { Component } from 'react';

class Author extends Component { 
	render() {
		return(
			<div>
				<p> Written by: {this.props.text}</p>
				</div>
		)
	}
}

export default Author;