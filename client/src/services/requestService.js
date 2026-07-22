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


export const getIncomingRequests=(hospitalId)=>{

return axios.get(

`http://localhost:8000/api/request/incoming/${hospitalId}`

);

};



export const acceptRequest=(id)=>{

return axios.put(

`http://localhost:8000/api/request/accept/${id}`

);

};



export const rejectRequest=(id)=>{

return axios.put(

`http://localhost:8000/api/request/reject/${id}`

);

};