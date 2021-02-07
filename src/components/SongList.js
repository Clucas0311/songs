import React, { Component } from 'react';
// First import connect from react-redux
import { connect } from 'react-redux';
// Due to connect this.props.songs = a list of the songs
class SongList extends Component {
	renderList() {
		// we are then going to map over the song list props and create a button click
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">Select</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// To get data from our redux store into our component we will import connect at the top
// Call connect
// define mapState To Props - to get our props

// mapStateToProps function
// We are going to take our state object - all of the data that is in inside our redux store and we're going to run some
// kind of calculation on it converting them into props inside of our components
// Gets the state and convert them into props
// it is going to be called with all of our state in our redux
// first argument will always be state
const mapStateToProps = (state) => {
	// return an object that will show up as props in our component
	return { songs: state.songs };
	// Console.log state to be sure it works
};

// Info about the syntax - connect is a closure function
// Call connect and  pass in our component as out second component call
export default connect(mapStateToProps)(SongList);
