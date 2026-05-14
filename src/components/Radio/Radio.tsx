import * as styles from "./radio.css";

interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
}

export const Radio = ({ label, ...props }: RadioProps) => {
  return (
    <label className={styles.wrapper}>
      <input type="radio" className={styles.input} {...props} />

      <div className={`${styles.dot} ${styles.checkedDot}`}>
        <div className={`${styles.inner} ${styles.checked}`} />
      </div>

      {label && <span>{label}</span>}
    </label>
  );
};
