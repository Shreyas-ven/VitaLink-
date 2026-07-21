import axios from "axios";

export const createRequest = (requestData) => {

    return axios.post(

        "http://localhost:8000/api/request/create-request",

        requestData

    );

};



export const getMyRequests = (hospitalId) => {

    return axios.get(

        `http://localhost:8000/api/request/my-requests/${hospitalId}`

    );

};