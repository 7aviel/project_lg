import BackButton from "../components/BackButton/BackButton";
import CarInsForm from "../components/Forms/CarCertForm/CarInsForm";
import { useHandleBack } from "../utils/useHandleClick";

const CarInsFormPage = () => {
  const handleClick = useHandleBack();

  return (
    <>
      <BackButton backTo={handleClick} />
      <CarInsForm />
    </>
  );
};

export default CarInsFormPage;
