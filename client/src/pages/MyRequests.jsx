import { useEffect, useState } from "react";

import { getMyRequests }

from "../services/requestService";


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

        <div>

            <h1>My Requests</h1>

            <hr />


            {

                requests.map((request) => (

                    <div key={request._id}>


                        <h3>

                            {request.organId.organName}

                        </h3>


                        <p>

                            Patient :

                            {request.patientName}

                        </p>


                        <p>

                            Blood Group :

                            {request.bloodGroup}

                        </p>


                        <p>

                            Requested To :

                            {request.donorHospitalId.hospitalName}

                        </p>


                        <p>

                            Status :

                            {request.status}

                        </p>


                        <hr />

                    </div>

                ))

            }


        </div>

    );

};

export default MyRequests;