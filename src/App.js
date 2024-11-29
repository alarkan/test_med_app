
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Landing_Page/Landing_Page';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Sign_Up/Sign_Up';
import Login from './components/Login/Login';


function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<LandingPage/>}/>
					<Route path="signup" element={<SignUp/>}/>
					<Route path="login" element={<Login/>}/>
					<Route path="*" element={<h1>404 Page Not Found</h1>}/>

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;