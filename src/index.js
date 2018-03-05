import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
	title: "Lemon is Cute and Nice",
	author: "Lemon",
	body: "I may be biased",
	comments: [
		"You're not, it's totally true",
		"You are a master writer",
		"Absolute madwoman"
	],
	allAuthors: [
	"eira",
	"dog",
	"cat"
	]
}


ReactDOM.render(<Post 
	title={post.title} 
	author={post.author}
	body={post.body}
	comments={post.comments}
	authors={post.allAuthors}
	/>, document.getElementById('root'));
registerServiceWorker();