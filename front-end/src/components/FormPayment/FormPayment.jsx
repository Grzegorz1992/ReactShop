import styles from "./FormPayment.module.css";
export function FormPaymanet() {
	return (
		<form className={styles.form}>
			<div>
				<h2 className={styles.heading}>Metoda płatności</h2>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="payment"
					name="paymnet"
				/>
				<label className={styles.label} htmlFor="payment">
					PayNow
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="payment"
					name="paymnet"
				/>
				<label className={styles.label} htmlFor="payment">
					YourPay
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="payment"
					name="paymnet"
				/>
				<label className={styles.label} htmlFor="payment">
					Bank transfer
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="payment"
					name="paymnet"
				/>
				<label className={styles.label} htmlFor="payment">
					Credit card
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="payment"
					name="paymnet"
				/>
				<label className={styles.label} htmlFor="payment">
					SpeedCash
				</label>
			</div>
		</form>
	);
}
