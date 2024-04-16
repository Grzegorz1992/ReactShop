import styles from "./Logo.module.css";
import LOGO from "../../assets/logo.svg";

export function Logo() {
	return (
		<>
			<div className={styles.logoContainer}>
				<h1 className={styles.logo}>WEARHOUSE</h1>
				<img className={styles.logoIcon} src={LOGO} />
			</div>
		</>
	);
}
