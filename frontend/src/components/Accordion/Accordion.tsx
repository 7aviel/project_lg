import { useState } from "react";
import styles from "./Accordion.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

type Prop = {
  data: {
    question: string;
    answer: React.ReactNode;
  }[];
};

const Accordion = ({ data }: Prop) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section>
      <div>
        <h1 className={styles.section__title}>Preguntas frecuentes</h1>
      </div>
      <div className={styles.accordion__wrapper}>
        <div className={styles.accordion}>
          {data.map((items, index) => (
            <div key={index} className={styles.accordion__items}>
              <div
                className={styles.items__title}
                onClick={() => toggle(index)}
              >
                <h5>{items.question}</h5>
                {selectedIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              <div
                className={
                  selectedIndex === index
                    ? `${styles.items__content} ${styles.items__content__show}`
                    : `${styles.items__content}`
                }
              >
                {items.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
