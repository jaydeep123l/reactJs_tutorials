import { Route, Link, Routes } from 'react-router-dom'
import AddMeetUp from './pages/AddMeetUp';
import FavouriteMeetUp from './pages/FavouriteMeetUp';
import ListAllMeetUp from './pages/ListAllMeetUp';
import MainNavigation from './components/Layout/MainNavigation'

function App() {
	return (
		<div>
			<MainNavigation/>
			<Routes>
				<Route path='/' element={<ListAllMeetUp />} />

				<Route path='/add-meet-up' element={<AddMeetUp />} />

				<Route path='/favourites' element={<FavouriteMeetUp />} />

			</Routes>
		</div>
	);
}

export default App;
