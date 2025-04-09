import BackButton from "../components/BackButton/BackButton";
import FormOneInsurance from "../components/Forms/InsBudget/FormOneInsurance";
import { useHandleBack } from "../utils/useHandleClick";

const InsuranceFormOne = () => {
  const handleClick = useHandleBack();

  return (
    <>
      <BackButton backTo={handleClick} />
      <FormOneInsurance />
    </>
  );
};

export default InsuranceFormOne;
