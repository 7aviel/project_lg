import styles from "./Card.module.css";

type Props = {
  icon?: React.ReactNode; // Usa "any" para pasar un ícono directamente
  title?: string;
  text?: string;
  buttonText?: React.ReactNode;
  btnOnClick?: () => void;
};

export default function Card({
  icon,
  title,
  text,
  buttonText,
  btnOnClick,
}: Props) {
  return (
    <div className="section-card">
      <div className="card">
        <div className="flex content-center text-align-center ">
          <h6 className="line-height-sm">{title}</h6>
        </div>
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
