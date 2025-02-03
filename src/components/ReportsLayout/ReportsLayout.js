import React from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
    const reports = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatology' }
    ];

    return (
        <div className="container">
            <h2 className="title">Reports</h2>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.name}</td>
                            <td>{report.specialty}</td>
                            <td>
                                <button className="view-button">View Report</button>
                            </td>
                            <td>
                                <button className="download-button">Download Report</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;
