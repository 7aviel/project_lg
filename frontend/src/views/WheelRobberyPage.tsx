import BackButton from "../components/BackButton/BackButton";
import { useHandleBack } from "../utils/useHandleClick";
import WheelRobberyForm from "../components/WheelRobbery/WheelRobberyForm";

const WheelRobberyPage = () => {
  const handleClick = useHandleBack();
  return (
    <>
      <BackButton backTo={handleClick} />
      <WheelRobberyForm />
    </>
  );
};

export default WheelRobberyPage;
