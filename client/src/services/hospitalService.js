import axios from "axios";

const API_URL = "http://localhost:8000/api/hospital";


export const registerHospital = async (hospitalData) => {

    return await axios.post(
        `${API_URL}/register`,
        hospitalData
    );

};

export const loginHospital = async (loginData) => {

    return await axios.post(

        `${API_URL}/login`,
        loginData

    );

};