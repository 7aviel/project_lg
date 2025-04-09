import { useNavigate } from "react-router-dom";

export const useHandleBack = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/seguros");
  };

  return handleBackClick;
};
