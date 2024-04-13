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
						id="viapost"
						name="viapost"
					/>
					<label className={styles.label} htmlFor="viapost">
						VIAPOST
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="happydrive"
						name="happydrive"
					/>
					<label className={styles.label} htmlFor="happydrive">
						HAPPYDRIVE
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="yourshipment"
						name="yourshipment"
					/>
					<label className={styles.label} htmlFor="yourshipment">
						YOURSHIPMENT
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="demisend"
						name="demisend"
					/>
					<label className={styles.label} htmlFor="demisend">
						DEMISEND
					</label>
				</div>
				<div className={styles.inputContainer}>
					<input
						className={styles.radio}
						type="radio"
						id="shoprecive"
						name="shoprecive"
					/>
					<label className={styles.label} htmlFor="shoprecive">
						ODBIÓR W SKLEPIE
					</label>
				</div>
			</form>
		</>
	);
}
