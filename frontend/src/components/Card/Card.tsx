import styles from "./Card.module.css";

type Props = {
  icon?: React.ReactNode; // Usa "any" para pasar un ícono directamente
  text: string;
  buttonText?: React.ReactNode;
  btnOnClick?: () => void;
}; /* <FontAwesomeIcon
icon={icon}
size="2xl"
className={`${styles.card__icon}`}
/> */

export default function Card({ icon, text, buttonText, btnOnClick }: Props) {
  return (
    <div className="section-card">
      <div className="card">
        <div className="flex content-center">{icon}</div>
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
