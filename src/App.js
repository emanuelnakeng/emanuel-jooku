import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Templates from './components/pages/Templates';
import Contact from './components/pages/Contact';
import Docs from './components/pages/Docs';
import Account from './components/pages/Account';
import Pricing from './components/pages/Pricing';
import Terms from './components/pages/Terms';
import Error from './components/pages/Error';
import Build from './components/Editor/Build';
import SingleTemplate from './components/pages/SingleTemplate';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/template-library' element={<Templates />}></Route>
			<Route
				path='/template-library/:id'
				element={<SingleTemplate />}
			></Route>
			<Route path='/contact' element={<Contact />}></Route>
			<Route path='/docs' element={<Docs />}></Route>
			<Route path='/account' element={<Account />}></Route>
			<Route path='/pricing' element={<Pricing />}></Route>
			<Route path='/terms' element={<Terms />}></Route>
			<Route path='/build' element={<Build />}></Route>
			<Route path='*' element={<Error />}></Route>
		</Routes>
	);
};

export default App;
