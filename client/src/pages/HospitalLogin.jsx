import { useState } from "react";
import { loginHospital } from "../services/hospitalService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

        <div>

            <h1>VITALINK</h1>
            <h2>Hospital Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

                <p>Don't have an account?</p>

<Link to="/register">
    Register Here
</Link>

            </form>

        </div>

    );
};

export default HospitalLogin;