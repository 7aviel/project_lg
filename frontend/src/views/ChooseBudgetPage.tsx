import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import ChooseVehicle from "../components/ChooseVehicle/ChooseVehicle";

const ChooseBudgetPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <BackButton backTo={handleClick} />
      <ChooseVehicle />
    </>
  );
};

export default ChooseBudgetPage;
