import { useEffect, useState } from "react";

import { getAvailableOrgans }

from "../services/organService";


const AvailableOrgans = () => {

    const [organs, setOrgans] = useState([]);


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

        <div>

            <h1>Available Organs</h1>

            <hr />

            {

                organs.map((organ) => (

                    <div key={organ._id}>

                        <h3>{organ.organName}</h3>

                        <p>Blood Group : {organ.bloodGroup}</p>

                        <p>Donor Age : {organ.donorAge}</p>

                        <p>Gender : {organ.donorGender}</p>

                        <p>Status : {organ.status}</p>
                        <p>
    Hospital Name :
    {organ.hospitalId.hospitalName}
</p>

<p>
    Location :
    {organ.hospitalId.address}
</p>

                        <hr />

                    </div>

                ))

            }

        </div>

    );

};

export default AvailableOrgans;