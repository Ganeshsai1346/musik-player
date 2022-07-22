/** @format */
import "../App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="mt-5">
      <span>
        <Button onClick={goToLogin}>Login</Button>
      </span>
    </div>
  );
};

export default HomePage;
