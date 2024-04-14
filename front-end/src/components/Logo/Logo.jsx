import styles from "./Logo.module.css";
import  LOGO  from "../../assets/logo.svg";

export function Logo() {
	return <>
    <h1 className={styles.logo}>
			WEARHOUSE
         <img src={LOGO} />
		</h1>
    </>
		
	
}
