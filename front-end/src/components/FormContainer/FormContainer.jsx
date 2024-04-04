import styles from "./FormContainer.module.css";
export function FormContainer({ children }) {
	return <div className={styles.formContainer}>{children}</div>;
}
