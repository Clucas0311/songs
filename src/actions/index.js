// Action creator
// Creating a named export because it allows us to export many different functions from a file
export const selectSong = (song) => {
	// return an action
	return {
		type: 'SONG_SELECTED',
		// We are going to have a payload to specify what song we want
		payload: song
	};
};
