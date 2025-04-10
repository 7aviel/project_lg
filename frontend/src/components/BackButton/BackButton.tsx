import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BackButton.module.css";

type Props = {
  backTo?: () => void;
};

const BackButton = ({ backTo }: Props) => {
  return (
    <button
      type="button"
      title="btn"
      className={`${styles.backBtn}`}
      onClick={backTo}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackButton;
