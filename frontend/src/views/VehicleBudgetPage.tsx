import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import VehicleBudget from "../components/Forms/CarBudget/VehicleBudget";

const VehicleBudgetPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <BackButton backTo={handleClick} />
      <VehicleBudget />
    </>
  );
};

export default VehicleBudgetPage;
