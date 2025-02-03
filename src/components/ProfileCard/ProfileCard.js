// Following code has been commented with appropriate comments for your reference. 
// Import necessary modules from React and other files
import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

// Define a Function component called ProfileForm
const ProfileForm = () => {
    // Set up state variables using the useState hook
    const [userDetails, setUserDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState([]);

    // Access the navigation functionality from React Router
    const navigate = useNavigate();

    // Use the useEffect hook to fetch user profile data when the component mounts or updates
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        } else {
            fetchUserProfile();
        }
    }, [navigate]);

    // Function to fetch user profile data from the API
    const fetchUserProfile = async () => {
        try {
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email"); // Get the email from session storage

            if (!authtoken) {
                navigate("/login");
            } else {
                const response = await fetch(`${API_URL}/api/auth/user`, {
                    headers: {
                        "Authorization": `Bearer ${authtoken}`,
                        "Email": email, // Add the email to the headers
                    },
                });
                
                if (response.ok) {
                    const user = await response.json();
                    console.log(user);
                    
                    setUserDetails(user);
                    setFormData({
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                    });
                } else {
                    // Handle error case
                    throw new Error("Failed to fetch user profile");
                }
            }
        } catch (error) {
            console.error(error);
            // Handle error case
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Logic to save the updated details (e.g., API call)
        console.log('Updated details:', formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
        });
        setIsEditing(false);
    };

    return (
        <div className="container" style={{marginTop: "200px"}}>
        <div className="profile-card" style={{ width: "50%", margin:"auto" }}>
            {isEditing ? (
                <div className="profile-details">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p><strong>Name:</strong> {userDetails.name}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Phone:</strong> {userDetails.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
        </div>
    );
};

export default ProfileForm;