import React, {Component} from 'react';

class Comment extends Component {
	render() {
		return(
			<div>
				<p>{this.props.id}: {this.props.text}</p>
			</div>
		)
	}
}

export default Comment;