import BackButton from "../components/BackButton/BackButton";
import MotoCertForm from "../components/Forms/MotoCertForm/MotoCertForm";
import { useHandleBack } from "../utils/useHandleClick";

const MotoFormsPage = () => {
  const handleClick = useHandleBack();

  return (
    <>
      <BackButton backTo={handleClick} />
      <MotoCertForm />
    </>
  );
};

export default MotoFormsPage;
