// combined reducers will allow us to combine multiple users
import { combineReducers } from 'redux';

// this will be the list of songs title and duration
const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '2:30' },
		{ title: 'All Star', duration: '3:15' },
		{ title: 'I Want it That Way', duration: '1:45' }
	];
};

// initial value is null becaus no song has been selected
const selectedSongReducer = (selectedSong = null, action) => {
	// if the type is 'SONG_SELECTED'
	if (action.type === 'SONG_SELECTED') {
		// then return the payload for that function
		return action.payload;
	} // otherwise just return the selected song
	return selectedSong;
};

// to use combine reducers we will pass it a object
// the keys of this object will be the keys that show up in our state object
// export default will make sure that any other file will have access to this file combine reducers
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
