import React, {Component} from 'react';
const axios = require('axios');

class Home extends Component {
  	
  	constructor(props) {
  		super(props)
  		this.state = {
  			shakespeare: ''
  		}
  	}

  	componentDidMount() {
  		//api call
  		//save a refernece to 'this' because the value of 'this' will change
  		//inside the different callback functions

  		var base = this
  		//url for api
  		let poemApi = 'http://www.shakeitspeare.com/api/poem'
  		// our fetch of that poemApi
  		// fetch(poemApi)
  		// 	.then((response) => {
  		// 		//returns as json
  		// 		return response.json()
  		// 	})
  		// 	.then((json) => {
  		// 		base.setState({
  		// 			shakespeare: json.poem
  		// 		})
  		// 	})
  		// 	.catch((error) => {
  		// 		console.log('an error occurred whilst parsing: ', error)
  		// 	})

  		// axios.get(poemApi)
  		// 	.then((response) => {
  		// 		base.setState({
  		// 			shakespeare: response.data.poem
  		// 		})
  		// 	})
  		// 	.catch((error) => {
  		// 		console.log('an error occurred whilst parsing: ', error)
  		// 	})

  		axios({
  			method: 'GET',
  			url: poemApi
  		})
  			.then((response) => {
  				base.setState({
  					shakespeare: response.data.poem
  				})
  			})
  	}

	render() {

		if (this.state.shakespeare) {
			var poetry = this.state.shakespeare
		} else {
			var poetry = "Loading..."
		}

		return(
		<div>
			<h1>Welcome to the Lemon Bloggo</h1>
			<img src='http://pngimg.com/uploads/lemon/lemon_PNG25203.png' />

			<h2>Fuck: </h2>
			<p> {poetry} </p>
		</div>
  		)
	}
}

export default Home;
