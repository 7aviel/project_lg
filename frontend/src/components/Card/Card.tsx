import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.css";

type Props = {
  icon: any; // Usa "any" para pasar un ícono directamente
  text: string;
  buttonText?: string;
  btnOnClick?: () => void;
};

export default function Card({ icon, text, buttonText, btnOnClick }: Props) {
  return (
    <div className="section-card">
      <div className="card">
        <div className="flex content-center">
          <FontAwesomeIcon
            icon={icon}
            size="2xl"
            className={`${styles.card__icon}`}
          />
        </div>
        <p className={`${styles.card__text}`}>{text}</p>
        <div className="flex content-center">
          {buttonText && (
            <button onClick={btnOnClick} title="btn">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
