import React, { Component } from 'react';
import logo from './logo.svg';
import Comments from './Comment';
import Authors from './Author';
import './App.css';


//the key in a map needs to be a unique value
//used by react to get access to actual dom element
//only used when iterating on collections
class Post extends Component {
  render() {

    {/*let allComments = [
      <Comments text={this.props.comments[0]}/>,
      <Comments text={this.props.comments[1]}/>,
      <Comments text={this.props.comments[2]}/>
    ]*/}

    let authors = this.props.authors.map(function(author,index) {
      return <Authors key={index} text={author} id={index} />
    })

    let allComments = this.props.comments.map(function(comment, index) {
      return <Comments key={index} text={comment} id={index} />
    })

    return (
      <div>
        <h2>{this.props.title}</h2>
        <h4>By {this.props.author}</h4>
        <hr/>
        <br/>
        <p>{this.props.body}</p>
        <p><strong>Comments:</strong> <br/></p>
        { allComments }
        { authors }
      </div>
    )
  }
}

export default Post;
