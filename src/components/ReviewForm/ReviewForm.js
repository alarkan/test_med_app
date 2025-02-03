import React, { useEffect, useState } from 'react';
import './ReviewForm.css';
import GiveReviews from './GiveReviews';
const ReviewForm = () => {
    const [doctorData, setDoctorData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const reviewDoctor = JSON.parse(localStorage.getItem(storedDoctorData.name));
        setDoctorData(reviewDoctor);
    }, [])

    if (!doctorData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="table-container">
            <h2>Doctor Information</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{doctorData.name}</td>
                        <td>{doctorData.speciality}</td>
                        <td><button onClick={() => setShowModal(true)}>Click Here</button></td>
                        <td></td>
                    </tr>
                    <tr><td>2</td><td>Dr. Elizabeth Clark</td><td>Gynecologist/Obstetrician</td><td></td><td><h3>3</h3></td></tr>
                </tbody>
            </table>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="appointment-card">
                            <div className="appointment-card__content">
                                {/* Display title for appointment details */}
                                <h3 className="appointment-card__title">Give Your Feedback</h3>
                                <GiveReviews/>                                {/* Close modal button */}
                                <button className="close-button" onClick={()=>setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReviewForm