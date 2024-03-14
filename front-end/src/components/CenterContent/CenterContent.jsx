import styles from "./CenterContent.module.css";
export function CenterContent({ children }) {
	return <div className={styles.centerContent}>{children}</div>;
}
