import BackButton from "../components/BackButton/BackButton";
import HomeLossForm from "../components/HomeLoss/HomeLossForm";
import { useHandleBack } from "../utils/useHandleClick";

const HomeLossPage = () => {
  const handleClick = useHandleBack();
  return (
    <>
      <BackButton backTo={handleClick} />
      <HomeLossForm />
    </>
  );
};

export default HomeLossPage;
