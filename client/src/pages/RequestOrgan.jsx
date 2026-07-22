import { useState } from "react";
import { createRequest } from "../services/requestService";
import { useLocation } from "react-router-dom";
import "../styles/RequestOrgan.css";

const RequestOrgan = () => {

    const [patientName, setPatientName] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [urgencyLevel, setUrgencyLevel] = useState("");
    const [reason, setReason] = useState("");

    const location = useLocation();
    const organ = location.state?.organ;

    // Toast Notification State
    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "",
    });

    // Function to display toast
    const showToast = (message, type) => {

        setToast({
            show: true,
            message,
            type,
        });

        setTimeout(() => {
            setToast({
                show: false,
                message: "",
                type: "",
            });
        }, 5000);

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const requestData = {

                organId: organ._id,

                donorHospitalId:
                    organ.hospitalId._id,

                requestingHospitalId:
                    localStorage.getItem("hospitalId"),

                patientName,

                patientAge,

                bloodGroup,

                urgencyLevel,

                reason,

            };

            const response = await createRequest(requestData);

            // Success Toast
            showToast(
                response.data.message,
                "success"
            );

            // Clear the form fields
            setPatientName("");
            setPatientAge("");
            setBloodGroup("");
            setUrgencyLevel("");
            setReason("");

        }

        catch (error) {

            console.log(error);

            // Error Toast
            showToast(
                "Request Failed",
                "error"
            );

        }

    };


    return (

        <div className="request-container">

            <div className="request-card">

                <h1>Organ Request Form</h1>

                <div className="organ-info">

                    <h3>Selected Organ Details</h3>

                    <p>
                        <strong>Organ:</strong>{" "}
                        {organ.organName}
                    </p>

                    <p>
                        <strong>Blood Group:</strong>{" "}
                        {organ.bloodGroup}
                    </p>

                    <p>
                        <strong>Hospital:</strong>{" "}
                        {organ.hospitalId.hospitalName}
                    </p>

                    <p>
                        <strong>Location:</strong>{" "}
                        {organ.hospitalId.address}
                    </p>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="request-form"
                >

                    <input
                        type="text"
                        placeholder="Patient Name"
                        value={patientName}
                        onChange={(e) =>
                            setPatientName(e.target.value)
                        }
                    />


                    <input
                        type="number"
                        placeholder="Patient Age"
                        value={patientAge}
                        onChange={(e) =>
                            setPatientAge(e.target.value)
                        }
                    />


                    <input
                        type="text"
                        placeholder="Blood Group"
                        value={bloodGroup}
                        onChange={(e) =>
                            setBloodGroup(e.target.value)
                        }
                    />


                    <select
                        value={urgencyLevel}
                        onChange={(e) =>
                            setUrgencyLevel(e.target.value)
                        }
                    >

                        <option value="">
                            Select Urgency Level
                        </option>

                        <option value="Low">
                            Low
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="High">
                            High
                        </option>

                        <option value="Critical">
                            Critical
                        </option>

                    </select>


                    <textarea
                        placeholder="Reason for Organ Requirement"
                        value={reason}
                        onChange={(e) =>
                            setReason(e.target.value)
                        }
                    />


                    <button
                        type="submit"
                        className="send-request-btn"
                    >
                        Send Request
                    </button>

                </form>

            </div>


            {/* Toast Notification */}

            {toast.show && (

                <div
                    className={`toast ${toast.type}`}
                >
                    {toast.message}
                </div>

            )}

        </div>

    );

};

export default RequestOrgan;