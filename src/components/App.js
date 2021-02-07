import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

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
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
