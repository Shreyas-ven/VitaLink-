import { useEffect, useState } from "react";
import "../styles/IncomingRequests.css";
import {
    getIncomingRequests,
    acceptRequest,
    rejectRequest,
} from "../services/requestService";

const IncomingRequests = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        fetchRequests();

    }, []);

    const fetchRequests = async () => {

        try {

            const hospitalId =
                localStorage.getItem("hospitalId");

            const response =
                await getIncomingRequests(hospitalId);

            setRequests(response.data.requests);

        }

        catch (error) {

            console.log(error);

        }

    };


    const handleAccept = async (requestId) => {

        try {

            const response =
                await acceptRequest(requestId);

            alert(response.data.message);

            fetchRequests();

        }

        catch (error) {

            console.log(error);

        }

    };


    const handleReject = async (requestId) => {

        try {

            const response =
                await rejectRequest(requestId);

            alert(response.data.message);

            fetchRequests();

        }

        catch (error) {

            console.log(error);

        }

    };


    return (

<div className="incoming-container">

    <h1 className="incoming-title">
        Incoming Organ Requests
    </h1>


    {

        requests.length === 0 ?

        (

            <p className="no-requests">
                No incoming requests available.
            </p>

        )

        :

        (

            <div className="requests-grid">

                {

                    requests.map((request) => (

                        <div
                            className="request-card"
                            key={request._id}
                        >

                            <h3>
                                {request.organId.organName}
                            </h3>

                            <p>
                                <strong>
                                    Requested By:
                                </strong>
                                {" "}
                                {request.requestingHospitalId.hospitalName}
                            </p>


                            <p>
                                <strong>
                                    Patient Name:
                                </strong>
                                {" "}
                                {request.patientName}
                            </p>


                            <p>
                                <strong>
                                    Blood Group:
                                </strong>
                                {" "}
                                {request.bloodGroup}
                            </p>


                            <p>
                                <strong>
                                    Urgency:
                                </strong>
                                {" "}
                                {request.urgencyLevel}
                            </p>


                            <p>
                                <strong>
                                    Reason:
                                </strong>
                                {" "}
                                {request.reason}
                            </p>


                            <p>
                                <strong>
                                    Status:
                                </strong>
                                {" "}
                                <span
                                    className={`status ${request.status.toLowerCase()}`}
                                >
                                    {request.status}
                                </span>
                            </p>


                            {

                                request.status === "Pending" && (

                                    <div className="button-group">

                                        <button
                                            className="accept-btn"
                                            onClick={() =>
                                                handleAccept(request._id)
                                            }
                                        >
                                            Accept
                                        </button>


                                        <button
                                            className="reject-btn"
                                            onClick={() =>
                                                handleReject(request._id)
                                            }
                                        >
                                            Reject
                                        </button>

                                    </div>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        )

    }

</div>

);

};

export default IncomingRequests;