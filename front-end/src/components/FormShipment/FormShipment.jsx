import styles from "./FormShipment.module.css";
import VIAPOST from "../../assets/post.svg";
import DEMISEND from "../../assets/post2.svg";

export function FormShipment() {
	return (
		<>
			<form className={styles.form}>
				<div>
					<h2 className={styles.heading}>Metoda wysyłki</h2>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label htmlFor="shipment">VIAPOST</label>
					<img src={VIAPOST} />
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label htmlFor="shipment">DEMISEND</label>
					<img src={DEMISEND} />
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label htmlFor="shipment">ODBIÓR W SKLEPIE</label>
				</div>
			</form>
		</>
	);
}
