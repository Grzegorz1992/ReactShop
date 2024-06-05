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
					id="paynow"
					name="paymentMethod"
				/>
				<label className={styles.label} htmlFor="paynow">
					PayNow
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="yourpay"
					name="paymentMethod"
				/>
				<label className={styles.label} htmlFor="yourpay">
					YourPay
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="bankTransfer"
					name="paymentMethod"
				/>
				<label className={styles.label} htmlFor="bankTransfer">
					Plaid
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="creditCard"
					name="paymentMethod"
				/>
				<label className={styles.label} htmlFor="creditCard">
					Credit card
				</label>
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.radio}
					type="radio"
					id="speedCash"
					name="paymentMethod"
				/>
				<label className={styles.label} htmlFor="speedCash">
					SpeedCash
				</label>
			</div>
		</form>
	);
}
