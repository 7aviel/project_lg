import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import ShipBudget from "../components/ShipBudget/ShipBudget";

const ShipBudgetPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/presupuestar");
  };

  return (
    <>
      <BackButton backTo={handleClick} />
      <ShipBudget />
    </>
  );
};

export default ShipBudgetPage;
