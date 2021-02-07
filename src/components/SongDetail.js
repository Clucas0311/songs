import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	//CONDITIONAL RENDERING:
	// When we first render out our component we don't have yet selectedSong/props.title
	// We are trying to read a prop of null so to fix this we will check it
	// if song doesn't exist yet
	if (!song) {
		// prompt the user to select a song/ click on something
		return <div>Select a song</div>;
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p>
				Title: {song.title}
				<br />
				Duration : {song.duration}
			</p>
		</div>
	);
};
// we use mapStateToProps to reach into that state object
const mapStateToProps = (state) => {
	// we are going to reach into that state object and pull out only the properties we need
	// to get the selected song we will need to access state.selectedSong
	// if you want to customize the key you will do it here:
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
