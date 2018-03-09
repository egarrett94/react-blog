import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import Post from './Post';
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

ReactDOM.render(<App/> 
	, document.getElementById('root'));
registerServiceWorker();