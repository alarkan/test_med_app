
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Landing_Page/Landing_Page';
import SignUp from './components/Sign_Up/Sign_Up';
import Login from './components/Login/Login';
import InstantConsultation from './components/InstantConsultation/InstantConsultation'; 
import Notification from './components/Notification/Notification';
import ReviewForm from './components/ReviewForm/ReviewForm';


function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Notification>
				<Routes>
					<Route path="/" element={<LandingPage/>}/>
					<Route path="signup" element={<SignUp/>}/>
					<Route path="login" element={<Login/>}/>
					<Route path="reviews" element={<ReviewForm/>}/>
					<Route path="/instant-consultation" element={<InstantConsultation />} />
					<Route path="*" element={<h1>404 Page Not Found</h1>}/>
				</Routes>
				</Notification>
			</BrowserRouter>
		</div>
	);
}

export default App;