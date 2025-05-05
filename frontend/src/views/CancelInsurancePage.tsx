import BackButton from "../components/BackButton/BackButton";
import CancelInsuranceForm from "../components/CancelInsuranceForm/CancelInsuranceForm";
import { useHandleBack } from "../utils/useHandleClick";

const CancelInsurancePage = () => {
  const handleClick = useHandleBack();
  return (
    <>
      <BackButton backTo={handleClick} />
      <CancelInsuranceForm />
    </>
  );
};

export default CancelInsurancePage;
