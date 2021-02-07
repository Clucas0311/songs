import React from 'react';
// curly braces specifically mean we want to import a named export from that file
import { selectSong } from '../actions';
import SongList from './SongList';

/* Let's say we want to get our list of songs into the songs list and console log them 
in order to do so we will need to create an instance of our connect compoment 
and pass into it some configuration to communicate with the provider saying we want a list of all the songs
 inside of our app 
*/

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
			</div>
		</div>
	);
};

export default App;
