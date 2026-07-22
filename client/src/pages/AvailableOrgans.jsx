import { useEffect, useState } from "react";

import { getAvailableOrgans }
from "../services/organService";

import { useNavigate } from "react-router-dom";
import "../styles/AvailableOrgans.css";

const AvailableOrgans = () => {

    const [organs, setOrgans] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        fetchOrgans();

    }, []);


    const fetchOrgans = async () => {

        try {

            const response = await getAvailableOrgans();

            setOrgans(response.data.organs);

        }

        catch (error) {

            console.log(error);

        }

    };


    return (

<div className="available-container">

    <h1 className="available-title">
        Available Organs
    </h1>


    {

        organs.length === 0 ?

        (

            <p className="no-organs">
                No organs available at the moment.
            </p>

        )

        :

        (

            <div className="organs-grid">

                {

                    organs.map((organ) => (

                        <div
                            className="organ-card"
                            key={organ._id}
                        >

                            <h3>
                                {organ.organName}
                            </h3>

                            <p>
                                <strong>Blood Group:</strong>
                                {" "}
                                {organ.bloodGroup}
                            </p>

                            <p>
                                <strong>Donor Age:</strong>
                                {" "}
                                {organ.donorAge}
                            </p>

                            <p>
                                <strong>Gender:</strong>
                                {" "}
                                {organ.donorGender}
                            </p>

                            <p>
                                <strong>Status:</strong>
                                {" "}
                                {organ.status}
                            </p>

                            <p>
                                <strong>Hospital:</strong>
                                {" "}
                                {organ.hospitalId.hospitalName}
                            </p>

                            <p>
                                <strong>Location:</strong>
                                {" "}
                                {organ.hospitalId.address}
                            </p>


                            <button
                                className="request-btn"

                                onClick={() =>
                                navigate(
                                    "/request-organ",
                                    {
                                        state:
                                        {
                                            organ
                                        }
                                    }
                                )}

                            >

                                Request Organ

                            </button>

                        </div>

                    ))

                }

            </div>

        )

    }

</div>

);

};

export default AvailableOrgans;