import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import VehicleBudget from "../components/Forms/CarAndMotoBudget/VehicleBudget";

const VehicleBudgetPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/presupuestar");
  };

  return (
    <>
      <BackButton backTo={handleClick} />
      <VehicleBudget />
    </>
  );
};

export default VehicleBudgetPage;
