import BackButton from "../components/BackButton/BackButton";
import CarAccidentForm from "../components/CarAccident/CarAccidentForm";
import { useHandleBack } from "../utils/useHandleClick";

const CarAccidentPage = () => {
  const handleClick = useHandleBack();
  return (
    <>
      <BackButton backTo={handleClick} />
      <CarAccidentForm />
    </>
  );
};

export default CarAccidentPage;
