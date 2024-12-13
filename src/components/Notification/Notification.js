// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';


// Function component Notification to display user notifications
const Notification = ({ children }) => {
    // State variables to manage user authentication, username, doctor data, and appointment data
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);
    const [showModal, setShowModal] = useState(false); // State variable to control modal visibility

    // useEffect hook to perform side effects in the component
    useEffect(() => {
        // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

        // Set isLoggedIn state to true and update username if storedUsername exists
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        // Set doctorData state if storedDoctorData exists
        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        // Set appointmentData state if storedAppointmentData exists
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }

        // Show modal if user is logged in and appointmentData is available
        if (isLoggedIn && appointmentData) {
            setShowModal(true);
        }
    }, [username]); // Dependency array ensures useEffect runs when isLoggedIn or appointmentData changes

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
    return (
        <div>
            {/* Render Navbar component */}
            <Navbar />
            {/* Render children components */}
            {children}
            {/* Display modal if showModal is true */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="appointment-card">
                            <div className="appointment-card__content">
                                {/* Display title for appointment details */}
                                <h3 className="appointment-card__title">Appointment Details</h3>
                                <p className="appointment-card__message">
                                    {/* Display doctor's name from doctorData */}
                                    <strong>Doctor:</strong> {appointmentData?.name}
                                </p>
                                <p className="appointment-card__message">
                                    <strong>Especiality:</strong> {appointmentData?.speciality}
                                </p>
                                <p className="appointment-card__message">
                                    <strong>Name:</strong> {doctorData?.name}
                                </p>
                                <p className="appointment-card__message">
                                    <strong>Phone Number:</strong> {doctorData?.phoneNumber}
                                </p>
                                {/* Close modal button */}
                                <button className="close-button" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Export Notification component for use in other parts of the application
export default Notification;