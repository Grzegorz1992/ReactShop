import styles from "./Logo.module.css";
import  LOGO  from "../../assets/logo.svg";

export function Logo() {
	return <>
    <h1 className={styles.logo}>
			WEARHOUSE
         <img className={styles.logoIcon} src={LOGO} />
		</h1>
    </>
		
	
}
