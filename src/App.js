import React, {Component} from 'react';
import Post from './Post.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home.js';
import FaveFood from './FaveFood.js';
import FaveMovie from './FaveMovie.js';
import About from './About.js';

import './App.css';

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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/blog">Blog</Link>{' '}
            <Link to="/favefood">Favorite Food</Link>{' '}
            <Link to="/favemovie">Favorite Movie</Link>{' '}
            <Link to="/about">About</Link>
          </nav>  
          {/*only renders when exactly the / path*/}
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={() => (<Post title={post.title} 
			author={post.author}
			body={post.body}
			comments={post.comments}
			authors={post.allAuthors}
			/>)} />
          <Route path='/favefood' component={FaveFood} />
          <Route path='/favemovie' component={FaveMovie} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
