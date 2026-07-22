import { useEffect, useState } from "react";

import { getMyRequests }

from "../services/requestService";
import "../styles/MyRequests.css";


const MyRequests = () => {

    const [requests, setRequests] = useState([]);


    useEffect(() => {

        fetchRequests();

    }, []);


    const fetchRequests = async () => {

        try {

            const hospitalId =

            localStorage.getItem("hospitalId");


            const response =

            await getMyRequests(hospitalId);


            setRequests(

                response.data.requests

            );

        }

        catch(error){

            console.log(error);

        }

    };


    return (

<div className="my-requests-container">

    <h1 className="requests-title">
        My Organ Requests
    </h1>

    {

        requests.length === 0 ?

        (

            <p className="no-requests">
                No organ requests found.
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
                                    Patient :
                                </strong>
                                {" "}
                                {request.patientName}
                            </p>


                            <p>
                                <strong>
                                    Blood Group :
                                </strong>
                                {" "}
                                {request.bloodGroup}
                            </p>


                            <p>
                                <strong>
                                    Requested To :
                                </strong>
                                {" "}
                                {request.donorHospitalId.hospitalName}
                            </p>


                            <p>
                                <strong>
                                    Status :
                                </strong>
                                {" "}
                                <span className="status">
                                    {request.status}
                                </span>
                            </p>

                        </div>

                    ))

                }

            </div>

        )

    }

</div>

);

};

export default MyRequests;