import styles from "./FormShipment.module.css";

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
					<label className={styles.label} htmlFor="shipment">
						VIAPOST
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label className={styles.label} htmlFor="shipment">
						HAPPYDRIVE
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label className={styles.label} htmlFor="shipment">
						YOURSHIPMENT
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label className={styles.label} htmlFor="shipment">
						DEMISEND
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shipment"
						name="shipment"
					/>
					<label className={styles.label} htmlFor="shipment">
						ODBIÓR W SKLEPIE
					</label>
				</div>
			</form>
		</>
	);
}
