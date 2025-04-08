import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export function handleClick() {
  return navigate("/seguros");
}
