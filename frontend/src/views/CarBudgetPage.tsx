import BackButton from "../components/BackButton/BackButton";
import VehicleBudget from "../components/Forms/CarBudget/VehicleBudget";
import { useHandleBack } from "../utils/useHandleClick";

const CarBudgetPage = () => {
  const handleClick = useHandleBack();

  return (
    <>
      <BackButton backTo={handleClick} />
      <VehicleBudget />
    </>
  );
};

export default CarBudgetPage;
