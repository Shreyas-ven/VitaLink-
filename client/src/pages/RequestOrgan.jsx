import { useState } from "react";
import { createRequest } from "../services/requestService";
import { useLocation } from "react-router-dom";
const RequestOrgan = () => {


    const [patientName, setPatientName] = useState("");

    const [patientAge, setPatientAge] = useState("");

    const [bloodGroup, setBloodGroup] = useState("");

    const [urgencyLevel, setUrgencyLevel] = useState("");

    const [reason, setReason] = useState("");

    const location = useLocation();

    const organ = location.state?.organ;
    console.log(organ);


    const handleSubmit = async (e) => {

    e.preventDefault();
    
    try{

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

        const response = await createRequest(
            requestData
        );

        alert(response.data.message);

    }

    catch(error){

        console.log(error);

        alert("Request Failed");

    }

};


    return (

        <div>

            <h1>Organ Request Form</h1>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={(e) =>
                        setPatientName(e.target.value)
                    }

                />

                <br /><br />

                <input

                    type="number"
                    placeholder="Patient Age"
                    value={patientAge}
                    onChange={(e) =>
                        setPatientAge(e.target.value)
                    }

                />

                <br /><br />


                <input

                    type="text"
                    placeholder="Blood Group"
                    value={bloodGroup}
                    onChange={(e) =>
                        setBloodGroup(e.target.value)
                    }

                />

                <br /><br />


                <input

                    type="text"
                    placeholder="Urgency Level"
                    value={urgencyLevel}
                    onChange={(e) =>
                        setUrgencyLevel(e.target.value)
                    }

                />

                <br /><br />


                <textarea

                    placeholder="Reason"

                    value={reason}

                    onChange={(e) =>
                        setReason(e.target.value)
                    }

                />

                <br /><br />


                <button type="submit">

                    Send Request

                </button>

            </form>

        </div>

    );

};

export default RequestOrgan;