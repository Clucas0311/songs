import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
	console.log(props);
	return <div>Song Detail</div>;
};
// we use mapStateToProps to reach into that state object
const mapStateToProps = (state) => {
	// we are going to reach into that state object and pull out only the properties we need
	// to get the selected song we will need to access state.selectedSong
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
