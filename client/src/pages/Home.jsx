import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>

            <h1>VITALINK</h1>

            <h2>
                Organ and Blood Donation Management System
            </h2>

            <br />

            <Link to="/register">
                <button>
                    Hospital Registration
                </button>
            </Link>

            <br /><br />

            <Link to="/login">
                <button>
                    Hospital Login
                </button>
            </Link>

        </div>
    );
};

export default Home;