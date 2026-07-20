import axios from "axios";


export const createOrgan = (organData) => {

    return axios.post(

        "http://localhost:8000/api/organ/post-organ",

        organData

    );
};


export const getAvailableOrgans = () => {

    return axios.get(

        "http://localhost:8000/api/organ/available-organs"

    );

};