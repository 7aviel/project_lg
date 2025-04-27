import BackButton from "../components/BackButton/BackButton";
import BrokenGlassForm from "../components/BrokenGlass/BrokenGlassForm";
import { useHandleBack } from "../utils/useHandleClick";

const BrokenGlassPage = () => {
  const handleClick = useHandleBack();
  return (
    <>
      <BackButton backTo={handleClick} />
      <BrokenGlassForm />
    </>
  );
};

export default BrokenGlassPage;
