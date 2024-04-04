import styles from "./FormCustomerAddress.module.css";

export function FormCustomerAddress() {
	return (
		<form className={styles.form}>
			<h2 className={styles.heading}>Twój adres zamieszkania</h2>
			<div className={styles.inputContainer}>
				<label htmlFor="street">ULICA</label>
				<input
					type="text"
					id="street"
					name="street"
					placeholder="Wprowadź nazwę ulicy..."
					required
					className={styles.streetInput}
				/>
			</div>
			<div className={styles.inputsFlexContainer}>
				<div className={styles.inputContainer}>
					<div className={styles.inputContainer}>
						<label htmlFor="houseNumber">NUMER DOMU</label>
						<input
							type="number"
							id="houseNumber"
							name="houseNumber"
							placeholder="Wprowadź numer domu..."
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor="postalCode">KOD POCZTOWY</label>
						<input
							type="text"
							id="postalCode"
							name="postalCode"
							placeholder="Wprowadź kod pocztowy..."
							pattern="[0-9]{2}-[0-9]{3}"
							title="Format: XX-XXX"
							required
						/>
						<span className={styles.format}>Format: XX-XXX</span>
					</div>
				</div>
				<div className={styles.inputContainer}>
					<div className={styles.inputContainer}>
						<label htmlFor="apartmentNumber">NUMER LOKALU</label>
						<input
							type="number"
							id="apartmentNumber"
							name="apartmentNumber"
							placeholder="Wprowadź numer mieszkania..."
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor="city">MIEJSCOWOŚĆ</label>
						<input
							type="text"
							id="city"
							name="city"
							placeholder="Wprowadź miejscowość..."
							required
						/>
					</div>
				</div>
			</div>
			<div className={styles.inputsFlexContainer}>
				<div className={styles.inputContainer}>
					<label htmlFor="country">KRAJ</label>
					<input
						type="text"
						id="country"
						name="country"
						placeholder="Wprowadź kraj..."
						required
					/>
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="phone">NUMER TELEFONU</label>
					<input
						type="text"
						id="phone"
						name="phone"
						placeholder="Wprowadź numer telefonu..."
						pattern="[0-9]{9}"
						title="Format: XXXXXXXXX"
						required
					/>
					<span className={styles.format}>Format: XXXXXXXXX</span>
				</div>
			</div>
		</form>
	);
}
