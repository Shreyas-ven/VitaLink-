import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HospitalDashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }

    }, [navigate]);

    const handleLogout = () => {

        localStorage.removeItem("token");
        navigate("/");

    };

    return (

        <div>

            <h1>Hospital Dashboard</h1>

            <h3>Welcome to VITALINK</h3>

            <hr />

            <button onClick={() => navigate("/organ/post")}>
                Post Available Organ
            </button>

            <br /><br />

            <button
            onClick={() =>
            navigate("/available-organs")
            }
            >
            Available Organs
            </button>

            <br /><br />

            <button>Request Organ</button>

            <br /><br />

            <button>My Requests</button>

            <br /><br />

            <button>Notifications</button>

            <br /><br />

            <button>Blood Management</button>

            <br /><br />

            <button onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
};

export default HospitalDashboard;