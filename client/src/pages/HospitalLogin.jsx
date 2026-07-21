import { useState } from "react";
import { loginHospital } from "../services/hospitalService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";


const HospitalLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const loginData = {
            email,
            password,
        };

        const response = await loginHospital(loginData);

        localStorage.setItem(
    "token",
    response.data.token
);

localStorage.setItem(
    "hospitalId",
    response.data.hospitalId
);

        alert(response.data.message);

        console.log(response.data);
        navigate("/dashboard");

    } catch (error) {

        console.log(error);

        alert(
            error.response.data.message
        );

    }

};

    return (

<div className="login-container">


    <div className="login-card">


        <h1>VITALINK</h1>

        <h2>Hospital Login</h2>



        <form 
            onSubmit={handleSubmit}
            className="login-form"
        >


            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />



            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />



            <button 
                type="submit"
                className="login-btn"
            >
                Login
            </button>


        </form>



        <p className="register-text">
            Don't have an account?
        </p>


        <Link 
            to="/register"
            className="register-link"
        >
            Register Here
        </Link>



    </div>


</div>

);
};

export default HospitalLogin;