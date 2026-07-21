import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Dashboard.css";

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

<div className="dashboard-container">

    <div className="dashboard-header">

        <div className="dashboard-title">
            <h1>VITALINK</h1>
            <p>Hospital Management Dashboard</p>
        </div>

        <button
            className="logout-btn"
            onClick={handleLogout}
        >
            Logout
        </button>

    </div>


    <div className="dashboard-grid">

        <div className="dashboard-card">

            <h3>Post Organ</h3>

            <p>
                Add newly available organs for donation.
            </p>

            <button
                onClick={() =>
                navigate("/organ/post")
                }
            >
                Open
            </button>

        </div>


        <div className="dashboard-card">

            <h3>Available Organs</h3>

            <p>
                View all organs available across hospitals.
            </p>

            <button
                onClick={() =>
                navigate("/available-organs")
                }
            >
                Open
            </button>

        </div>


        <div className="dashboard-card">

            <h3>Request Organ</h3>

            <p>
                Send organ requests to donor hospitals.
            </p>

            <button>
                Open
            </button>

        </div>



        <div className="dashboard-card">

            <h3>My Requests</h3>

            <p>
                Check the status of all your requests.
            </p>

            <button
                onClick={() =>
                navigate("/my-requests")
                }
            >
                Open
            </button>

        </div>



        <div className="dashboard-card">

            <h3>Notifications</h3>

            <p>
                View emergency and hospital notifications.
            </p>

            <button>
                Open
            </button>

        </div>



        <div className="dashboard-card">

            <h3>Blood Management</h3>

            <p>
                Manage blood requirements and availability.
            </p>

            <button>
                Open
            </button>

        </div>


    </div>

</div>

);
};

export default HospitalDashboard;