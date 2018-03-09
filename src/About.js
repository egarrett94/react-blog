import React, {Component} from 'react';
const axios = require('axios');

class About extends Component {
  
	constructor(props) {
		super(props) 
		this.state = {
			zip: 0,
			weather: null
		}
		this.handleChange = this.handleChange.bind(this);
   		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({zip: event.target.value})
	    console.log('Your zip code is' + this.state.zip)
	}

	kelvinToFahrenheit = (temp) => {
		var newTemp = (9/5)*(temp - 273) + 32
		return Math.floor(newTemp)
	}

	handleSubmit(event) {
		event.preventDefault()
		var base = this
  		//url for api
  		let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip='+ this.state.zip +',us&appid=052f26926ae9784c2d677ca7bc5dec98'

  		axios({
  			method: 'GET',
  			url: weatherApi
  		})
  			.then((response) => {
  				base.setState({
  					weather: response.data
  				})
  			})
	}

	render() {

		if( this.state.weather !== null ) {
			var temperature = this.kelvinToFahrenheit(this.state.weather.main.temp) + '°F'
			var humidity = 'Humidity: '+ this.state.weather.main.humidity + '%'
			var windspeed = 'Wind: ' + this.state.weather.wind.speed + 'mph'
			var weatherDesc = this.state.weather.weather[0].main
			var place = 'Here is the weather in ' + this.state.weather.name + ' today!'
		} else {
			var temperature = ' '
			var humidity = ' '
			var windspeed = ' '
			var weatherDesc = ' '
			var place = ' '
		}

		return(
			<div>
			    <div>
       
		      	<form onSubmit={this.handleSubmit}>
		      	<h2> {place} </h2>
		        <p className='temp'>
		      		{temperature}
		        </p>
		        <p className='weather'>
		      		{humidity}<br/>
		      		{windspeed}<br/>
		      		{weatherDesc}
		        </p>
		        <label>
		          Please enter your zip code for the weather:
		          <input type="text" onChange={this.handleChange} />
		        </label>
		        <input type="submit" value="Get my forecast!" />
		      </form>
		      </div>
			</div>
  		)

	}



  
}

export default About;
